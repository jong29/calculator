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
    const disV = document.querySelector(".display")
    disV.textContent = displayValue;
    console.log(disV);
}

// Variables
displayValue = 0;

const numbers = document.querySelectorAll(".number")
numbers.forEach((e) => {
    const i = e.textContent;
    console.log(i);
    e.addEventListener("click", (e) => {
        console.log(i);
        display(i);
    });
});