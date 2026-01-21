let num1 = document.getElementById('num1');;
let num2 = document.getElementById('num2');
let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divideBtn = document.getElementById('divideBtn');
let resultDiv = document.getElementById('result');
function getNumbers() {
    return [parseFloat(num1.value), parseFloat(num2.value)];
}
addBtn.addEventListener('click', function() {
    let [a, b] = getNumbers();
    resultDiv.textContent = `Result: ${a + b}`;
});
subtractBtn.addEventListener('click', function() {
    let [a, b] = getNumbers();
    resultDiv.textContent = `Result: ${a - b}`;
});
multiplyBtn.addEventListener('click', function() {
    let [a, b] = getNumbers();
    resultDiv.textContent = `Result: ${a * b}`;
});
divideBtn.addEventListener('click', function() {
    let [a, b] = getNumbers();
    if (b !== 0) {
        resultDiv.textContent = `Result: ${a / b}`;
    } else {
        resultDiv.textContent = "Error: Division by zero";
    }
});
