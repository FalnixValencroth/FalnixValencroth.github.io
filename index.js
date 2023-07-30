
function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const type = document.getElementById('type').value;
    const discount = document.getElementById('discount').value;

    let baseCost = 10; // Base cost for all types

    // Adjust base cost based on the selected type
    if (type === 'medium') {
        baseCost = 15;
    } else if (type === 'big') {
        baseCost = 20;
    }

    let totalCost = baseCost * quantity;

    // Apply discount based on the selected discount option
    if (discount === 'like') {
        totalCost *= 0.9; // 10% discount
    } else if (discount === 'hate') {
        totalCost *= 0.9; // -10% discount (10% increase)
    }

    // Display the total cost with the applied discount
    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}

