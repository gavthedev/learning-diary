function calculateTip(bill, rate, people)
{
  const total = (bill * (rate / 100)) / people;
  return Number.isFinite(total) ? total.toFixed(2) : null;
}

function validateInputs(bill, rate, people)
{
  if (bill <= 0 || isNaN(bill)) return "Bill must be over 0";
  if (rate < 0 || isNaN(rate)) return "Rate can't be negative";
  if (people < 1 || !Number.isInteger(people)) return "Minimum people can be is 1";
  return null;
}

function updateUI(result)
{
  const output = document.getElementById("tipOut");
  output.textContent = result ? `Tip per person CHF ${result}`
                              : "Invalid input.";
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

