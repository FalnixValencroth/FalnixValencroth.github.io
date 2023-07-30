function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const type = document.getElementById('type').value;

    let baseCost = 10;

   
    if (type === 'medium') {
        baseCost = 15;
    } else if (type === 'big') {
        baseCost = 20;
    }


    let totalCost = price * quantity;

  
    if (quantity <= 10) {
        totalCost *= 0.95; // 5% discount
    } else if (quantity <= 25) {
        totalCost *= 0.90; // 10% discount
    } else if (quantity >= 100) {
        totalCost *= 0.85; // 15% discount
    }


    totalCost += baseCost;


    const totalCostElement = document.getElementById('totalCost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}
