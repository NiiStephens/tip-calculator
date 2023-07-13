const button = document.getElementById("calculate");
const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercentage");
const totalSpanValue = document.getElementById("total");


function calculateTotal() {
    const billValue = billInput.value;
    console.log(billValue);
    const tipValue = tipInput.value;
    console.log(tipValue);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpanValue.innerHTML = totalValue.toFixed(2);

}

button.addEventListener("click", calculateTotal)