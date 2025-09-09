function calculateTip(amount, ratePct, numberOfPeople) {
  if (!(amount > 0) || !(ratePct >= 0)) return null;

  const tip = amount * (ratePct / 100);
  const total = amount + tip;
  const perPerson = total / numberOfPeople;

  return {
    total: +total.toFixed(2),
    tip: +tip.toFixed(2),
    perPerson: +perPerson.toFixed(2)
  };
}


function validateInputs(bill, rate, people)
{
  if (bill <= 0 || isNaN(bill)) return "Bill must be over 0";
  if (rate < 0 || isNaN(rate)) return "Rate can't be negative";
  if (people < 1 || !Number.isInteger(people)) return "Minimum people can be is 1";
  return null;
}

function updateUI(result) {
  const totalEl = document.getElementById("total");
  const resultsSection = document.getElementById("results");
  const tipEl = document.getElementById("tip");
  const perPersonEl = document.getElementById("perPerson");
  const perPersonLine = document.getElementById("perPersonLine");

  if (result) {
    totalEl.textContent = `CHF ${result.total}`;
    tipEl.textContent = `CHF ${result.tip}`;

    if (Number(document.getElementById("people").value) > 1) {
      perPersonEl.textContent = `CHF ${result.perPerson}`;
      perPersonLine.hidden = false;
    } else {
      perPersonLine.hidden = true;
    }

    resultsSection.hidden = false;
  } else {
    totalEl.textContent = "--";
    tipEl.textContent = "--";
    perPersonEl.textContent = "--";
    resultsSection.hidden = true;
  }
}

document.getElementById("tip-form").addEventListener("submit", function (e){
                                                    e.preventDefault();

const bill = Number(document.getElementById("bill").value);
const rate = Number(document.getElementById("rate").value);
const people = Number(document.getElementById("people").value);

const error = validateInputs(bill, rate, people);
if (error) return alert(error);

const result = calculateTip(bill, rate, people);
updateUI(result);

});













