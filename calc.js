// Functions
// Variables
let displayValue;
let op1;
let op2;
let operator;
let opmode = false;
let disBuf = "";

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
    if (operator === "add") {
        return add(a, b);
    } else if (operator === "subtract") {
        return subtract(a, b);
    } else if (operator === "multiply") {
        return multiply(a, b);
    } else if (operator === "divide") {
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
        if (opmode) {
            op1 = op2;
            disBuf = i;
            opmode = false;
        } else {
            disBuf += i;
        }
        op2 = parseInt(disBuf);
        display(disBuf);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((e) => {
    const i = e.textContent;
    e.addEventListener("click", (e) => {
        operator = e.target.id;
        opmode = true;
    });
});

const equal = document.getElementById("equals").addEventListener("click", () => {
    console.log(op1, operator, op2);
    let result = operate(operator, op1, op2);
    display(result);
    op2 = result;
    opmode = true;
});

const clear = document.getElementById("clear").addEventListener("click", () => {
    op1 = 0;
    op2 = 0;
    operator = "";
    opmode = true;
    display("");
});