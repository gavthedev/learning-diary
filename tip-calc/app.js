const form = document.getElementById('tip-form');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const resultsSection = document.getElementById('results');
const totalDisplay = document.getElementById('total');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || bill <= 0 || isNaN(tip) || tip < 0 || isNaN(people) || people < 1) {
    alert("Please enter valid values.");
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const totalPerPerson = (bill + tipAmount) / people;

  totalDisplay.textContent = totalPerPerson.toFixed(2);
  resultsSection.hidden = false;
});
