function calcAmount() {
    let price = 1200;
    let deliveryPr = 500;
    let amountInput = document.querySelector("#AmoInp");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value)

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    

    showSumPrice(price, amountNumber);

    function showSumPrice (price, amountNumber){
    let showAmount = document.querySelector("span.show-amount");
if (amountNumber > 100) {
    alert("Max 100 rendelhetsz hülye!");
}
else if (amountNumber < 1) {
    alert("1 virágot rendelj máán meg faxom!");
}
else {
    let amount = parseInt(amountInput.value) * price;
    amount = amount < 5000 ? (amount+deliveryPr) : amount;
    showAmount.innerHTML = amount;
}
}
}

// Select feltöltése

let toppings = [
    "Tuja smaragd",
    "Leylandi",
    "Akácfenyő",
    "Paradicsomfa",
    "Diófa",
    "Majomkenyérfa",
    "Sáfrány",
    "Fagyal"
];
let toppingsSelect = document.querySelector("#topinput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingsSelect.appendChild(option);
    index++;
}

