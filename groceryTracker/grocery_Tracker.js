function groceryTracker() {
    const grocery1Amount = parseFloat(document.getElementById('grocery-1').value);
    const grocery2Amount = parseFloat(document.getElementById('grocery-2').value);
    const grocery3Amount = parseFloat(document.getElementById('grocery-3').value);

    const total = grocery1Amount + grocery2Amount + grocery3Amount;

    document.getElementById('result').innerText = `The total amount is $ ${total}`;
}