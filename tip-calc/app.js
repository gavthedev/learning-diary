const chf = new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" });

const form = document.getElementById("tip-form");
const totalEl = document.getElementById("total");
const resultsSection = document.getElementById("results");
const tipEl = document.getElementById("tip");
const perPersonEl = document.getElementById("perPerson");
const perPersonRow = document.getElementById("perPersonRow");
const errorEl = document.getElementById("formError");

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
  if (!(bill > 0) || Number.isNaN(bill)) return "Bill must be greater than 0";
  if (!(rate >= 0) || Number.isNaN(rate)) return "Rate can't be negative";
  if (rate > 100) return "Rate cannot exceed 100";
  if (!Number.isInteger(people) || people < 1) return "Minimum people is 1";
  return null;
}

function updateUI(result, people) {
  if (result) {
    totalEl.textContent = chf.format(result.total);
    tipEl.textContent = chf.format(result.tip);
    perPersonEl.textContent = chf.format(result.perPerson);

    perPersonRow.hidden = people === 1;
    resultsSection.hidden = false;
    resultsSection.classList.add("show");
    resultsSection.classList.remove("hidden");
  } else {
    totalEl.textContent = "--";
    tipEl.textContent = "--";
    perPersonEl.textContent = "--";
    perPersonRow.hidden = true;
    resultsSection.hidden = true;
    resultsSection.classList.remove("show");
    resultsSection.classList.add("hidden");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bill = Number(document.getElementById("bill").value);
  const rate = Number(document.getElementById("rate").value);
  const people = Number(document.getElementById("people").value);

  const error = validateInputs(bill, rate, people);
  if (error) {
    errorEl.textContent = error;
    if (!(bill > 0) || Number.isNaN(bill)) document.getElementById("bill").focus();
    else if (!(rate >= 0) || Number.isNaN(rate) || rate > 100) document.getElementById("rate").focus();
    else if (!Number.isInteger(people) || people < 1) document.getElementById("people").focus();
    updateUI(null, people);
    return;
  }

  errorEl.textContent = "";
  const result = calculateTip(bill, rate, people);
  updateUI(result, people);
});
