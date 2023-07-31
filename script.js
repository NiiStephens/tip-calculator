const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercentage");
const totalSpan = document.getElementById("total");


function calculateTotal() {
    // preventDefault();
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}


btnEl.addEventListener("click", calculateTotal)