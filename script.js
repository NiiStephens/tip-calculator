const button = document.getElementById("calculate");
const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercentage");
const totalSpanValue = document.getElementById("calculate");


function calculateTotal() {
    preventDefault();
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    console.log(totalValue);
    // totalSpanValue.innerText = totalValue.toFixed(2);
    
}


button.addEventListener("click", calculateTotal)