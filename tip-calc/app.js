// app.js
const chf = new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" });

const form = document.getElementById("tip-form");
const themeToggleBtn = document.getElementById("themeToggle");
const billEl = document.getElementById("bill");
const rateEl = document.getElementById("rate");
const peopleEl = document.getElementById("people");
const totalEl = document.getElementById("total");
const resultsSection = document.getElementById("results");
const tipEl = document.getElementById("tip");
const perPersonEl = document.getElementById("perPerson");
const perPersonRow = document.getElementById("perPersonRow");
const errorEl = document.getElementById("formError");
const totalPerPersonEl = document.getElementById("totalPerPerson");
const totalPerPersonRow = document.getElementById("totalPerPersonRow");

function debounce(fn, delay = 150) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function readNumber(inputEl) {
  let value = inputEl.valueAsNumber;
  if (Number.isNaN(value)) {
    const raw = (inputEl.value || "").trim();
    if (!raw) return NaN;
    const normalized = raw.replaceAll(",", ".");
    value = Number(normalized);
  }
  return value;
}

function calculateTip(amount, ratePct, numberOfPeople) {
  if (!(amount > 0)) return null;
  if (!(ratePct >= 0)) return null;
  if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1) return null;

  const rate = Math.min(Math.max(ratePct, 0), 100);
  const tip = amount * (rate / 100);
  const total = amount + tip;
  const tipPerPerson = tip / numberOfPeople;

  return { total, tip, perPerson: tipPerPerson };
}

function validateInputs(bill, rate, people) {
  if (Number.isNaN(bill)) return "Bill must be a number";
  if (!(bill > 0)) return "Bill must be greater than 0";
  if (Number.isNaN(rate)) return "Rate must be a number";
  if (!(rate >= 0)) return "Rate can't be negative";
  if (rate > 100) return "Rate cannot exceed 100";
  if (!Number.isInteger(people) || people < 1) return "Minimum people is 1";
  return null;
}

function updateUI(result, people) {
  if (result) {
    totalEl.textContent = chf.format(result.total);
    tipEl.textContent = chf.format(result.tip);
    perPersonEl.textContent = chf.format(result.perPerson);
    const totalPerPerson = result.total / people;
    totalPerPersonEl.textContent = chf.format(totalPerPerson);

    const hidePerPerson = people === 1;
    perPersonRow.hidden = hidePerPerson;
    totalPerPersonRow.hidden = hidePerPerson;

    resultsSection.hidden = false;
    resultsSection.classList.add("show");
    resultsSection.classList.remove("hidden");
  } else {
    totalEl.textContent = "--";
    tipEl.textContent = "--";
    perPersonEl.textContent = "--";
    totalPerPersonEl.textContent = "--";
    perPersonRow.hidden = true;
    totalPerPersonRow.hidden = true;

    resultsSection.hidden = true;
    resultsSection.classList.remove("show");
    resultsSection.classList.add("hidden");
  }
}

function markInvalid(bill, rate, people) {
  [billEl, rateEl, peopleEl].forEach((el) => {
    el.removeAttribute("aria-invalid");
    el.classList.remove("input--error");
  });

  if (Number.isNaN(bill) || !(bill > 0)) {
    billEl.setAttribute("aria-invalid", "true");
    billEl.classList.add("input--error");
    billEl.focus();
  } else if (Number.isNaN(rate) || !(rate >= 0) || rate > 100) {
    rateEl.setAttribute("aria-invalid", "true");
    rateEl.classList.add("input--error");
    rateEl.focus();
  } else if (!Number.isInteger(people) || people < 1) {
    peopleEl.setAttribute("aria-invalid", "true");
    peopleEl.classList.add("input--error");
    peopleEl.focus();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bill = readNumber(billEl);
  const rate = readNumber(rateEl);
  const people = readNumber(peopleEl);

  const error = validateInputs(bill, rate, people);
  if (error) {
    errorEl.textContent = error;
    markInvalid(bill, rate, people);
    updateUI(null, people);
    return;
  }

  errorEl.textContent = "";
  [billEl, rateEl, peopleEl].forEach((el) => {
    el.removeAttribute("aria-invalid");
    el.classList.remove("input--error");
  });

  const result = calculateTip(bill, rate, people);
  updateUI(result, people);

  try {
    localStorage.setItem("tc:bill", String(bill));
    localStorage.setItem("tc:rate", String(rate));
    localStorage.setItem("tc:people", String(people));
  } catch {
  }
});

const liveCompute = debounce(() => {
  const bill = readNumber(billEl);
  const rate = readNumber(rateEl);
  const people = readNumber(peopleEl);

  const error = validateInputs(bill, rate, people);
  if (error) {
    errorEl.textContent = error;
    markInvalid(bill, rate, people);
    updateUI(null, people);
    return;
  }

  errorEl.textContent = "";
  [billEl, rateEl, peopleEl].forEach((el) => {
    el.removeAttribute("aria-invalid");
    el.classList.remove("input--error");
  });

  const result = calculateTip(bill, rate, people);
  updateUI(result, people);

  try {
    localStorage.setItem("tc:bill", String(bill));
    localStorage.setItem("tc:rate", String(rate));
    localStorage.setItem("tc:people", String(people));
  } catch {
  }
}, 150);

form.addEventListener("input", liveCompute);

function applyTheme(pref) {
  document.body.classList.remove("theme-dark", "theme-light");
  if (pref === "dark") document.body.classList.add("theme-dark");
  if (pref === "light") document.body.classList.add("theme-light");

  if (themeToggleBtn) {
    const pressed = pref === "dark" ? "true" : "false";
    themeToggleBtn.setAttribute("aria-pressed", pressed);
  }
}

try {
  let savedTheme = localStorage.getItem("tc:theme");
  if (savedTheme !== "dark" && savedTheme !== "light") {
    savedTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("tc:theme", savedTheme);
  }
  applyTheme(savedTheme);
} catch {
  applyTheme("light");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("tc:theme", next);
    } catch {
    }
  });
}

try {
  const svBill = localStorage.getItem("tc:bill");
  const svRate = localStorage.getItem("tc:rate");
  const svPeople = localStorage.getItem("tc:people");
  if (svBill !== null) billEl.value = svBill;
  if (svRate !== null) rateEl.value = svRate;
  if (svPeople !== null) peopleEl.value = svPeople;
} catch {
}

liveCompute();

[billEl, rateEl, peopleEl].forEach((el) => {
  el.addEventListener("focus", (e) => e.target.select());
  el.addEventListener("mouseup", (e) => e.preventDefault());
});
