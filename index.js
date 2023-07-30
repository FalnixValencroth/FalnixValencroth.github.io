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

  function calculateTotalCost() {
    const baseCost = 10; // The base cost of the item
    const discountThreshold = 50; // Quantity threshold for discount
    const discountPercent = 10; // Percentage discount when quantity exceeds the threshold

    // User input
    const quantity = parseInt(document.getElementById('quantity').value);

    // Calculate the total cost with discount
    let totalCost = baseCost * quantity;

    // Apply discount if quantity exceeds the threshold
    if (quantity >= discountThreshold) {
      const discountAmount = (totalCost * discountPercent) / 100;
      totalCost -= discountAmount;
    }

    // Display the total cost with or without discount
    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
  }

  // Add event listener to the "Calculate Total" button
  document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);
