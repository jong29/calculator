// Functions


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

// Variables
let displayValue;
let op1;
let op2;
let operator;

const numbers = document.querySelectorAll(".number");
numbers.forEach((e) => {
    const i = e.textContent;
    e.addEventListener("click", (e) => {
        display(i);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((e) => {
    const i = e.textContent;
    e.addEventListener("click", (e) => {
        const op1d = document.querySelector(".display");
        op1 = op1d.textContent;
        operator = e.textContent;
    });
});

const equal = document.getElementById("equals").addEventListener('click', )