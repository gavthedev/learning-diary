function calculateTip(amount, ratePct, numberOfPeople) {
  if (!(amount > 0) || !(ratePct >= 0)) return null;
  const tip = +(amount * (ratePct / 100)).toFixed(2);
  const total = +(amount + tip).toFixed(2);
  const perPerson = +(total / numberOfPeople).toFixed(2);
  return { total, tip, perPerson };
}

function validateInputs(bill, rate, people)
{
  if (bill <= 0 || isNaN(bill)) return "Bill must be over 0";
  if (rate < 0 || isNaN(rate)) return "Rate can't be negative";
  if (people < 1 || !Number.isInteger(people)) return "Minimum people can be is 1";
  return null;
}

function updateUI(result) {
  const output = document.getElementById("total");
  const resultsSection = document.getElementById("results");

  if (result) {
    output.textContent = `CHF ${result}`;
    resultsSection.hidden = false;
  } else {
    output.textContent = "--";
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

const tip = calculateTip(bill, rate, people);
updateUI(tip);
});








