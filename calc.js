// Functions
// Variables
let displayValue;
let op1;
let op2;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator = "+") {
        return add(a, b);
    } else if (operator = "-") {
        return subtract(a, b);
    } else if (operator = "*") {
        return mutliply(a, b);
    } else if (operator = "/") {
        return divide(a, b);
    }
}

function display(displayValue) {
    const disV = document.querySelector(".display");
    disV.textContent = displayValue;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((e) => {
    const i = e.textContent;
    e.addEventListener("click", (e) => {
        op1 = op2;
        op2 = parseInt(i);
        display(i);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((e) => {
    const i = e.textContent;
    e.addEventListener("click", (e) => {
        operator = e.target.textContent;
        console.log(operator);
    });
});

const equal = document.getElementById("equals").addEventListener("click", () => {
    const result = operate(operator, op1, op2);
    display(result);
    op2 = result;
});