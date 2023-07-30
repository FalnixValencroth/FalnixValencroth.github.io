let display = document.getElementById('display');
let currentValue = '';

function appendToDisplay(value) {
  currentValue += value;
  display.value = currentValue;
}

function calculate() {
  try {
    currentValue = eval(currentValue);
    display.value = currentValue;
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  currentValue = '';
  display.value = '';
}
