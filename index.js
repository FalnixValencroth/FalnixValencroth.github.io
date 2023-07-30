function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const type = document.getElementById('type').value;

    let baseCost = 10; // Base cost for all types

    // Adjust base cost based on the selected type
    if (type === 'medium') {
        baseCost = 15;
    } else if (type === 'big') {
        baseCost = 20;
    }

    // Calculate the total cost based on the user-provided price
    let totalCost = price * quantity;

    // Apply discount based on the quantity of items ordered
    if (quantity <= 10) {
        totalCost *= 0.95; // 5% discount
    } else if (quantity <= 25) {
        totalCost *= 0.90; // 10% discount
    } else if (quantity >= 100) {
        totalCost *= 0.85; // 15% discount
    }

    // Add the base cost after applying the discount
    totalCost += baseCost;

    // Display the total cost with the applied discount
    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}
