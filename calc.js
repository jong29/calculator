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
    if (operator = "add") {
        return add(a, b);
    } else if (operator = "subtract") {
        return subtract(a, b);
    } else if (operator = "multiply") {
        return mutliply(a, b);
    } else if (operator = "divide") {
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
        operator = e.target.id;
        console.log(operator);
    });
});

const equal = document.getElementById("equals").addEventListener("click", () => {
    const result = operate(operator, op1, op2);
    display(result);
    op2 = result;
});

const clear = document.getElementById("clear").addEventListener("click", () => {
    op1 = 0;
    op2 = 0;
    operator = "";
    display("");
});