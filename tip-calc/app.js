const chf = new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" });

const form = document.getElementById("tip-form");
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

function readNumber(inputEl) {
  let value = inputEl.valueAsNumber;
  if (Number.isNaN(value)) {
    const replaced = inputEl.value.replace(",", ".");
    value = Number(replaced);
  }
  return value;
}

function calculateTip(amount, ratePct, numberOfPeople) {
  if (!(amount > 0)) return null;
  if (!(ratePct >= 0)) return null;
  if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1) return null;

  const tip = amount * (ratePct / 100);
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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bill = readNumber(billEl);
  const rate = readNumber(rateEl);
  const people = readNumber(peopleEl);

  const error = validateInputs(bill, rate, people);
  if (error) {
    errorEl.textContent = error;
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
});

form.addEventListener("input", () => {
  const bill = readNumber(billEl);
  const rate = readNumber(rateEl);
  const people = readNumber(peopleEl);
  const error = validateInputs(bill, rate, people);

  if (!error) {
    errorEl.textContent = "";
    [billEl, rateEl, peopleEl].forEach((el) => {
      el.removeAttribute("aria-invalid");
      el.classList.remove("input--error");
    });
  }
});
