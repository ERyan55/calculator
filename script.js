// Variable initalizations
let firstNum = null;
let secondNum = null;
let operator = "";
let displayVal = "";
let isEqualsPressed = false;

// Math functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (num2 === null) {
    num2 = parseFloat(displayVal);
  }
  let result = 0;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  firstNum = null;
  secondNum = null;
  operator = "";
  displayVal = "";
  displayNum(result.toString());
  return result;
}

function updateIsEqualsPressed() {
  isEqualsPressed = true;
}

// Decides whether to operate if both numbers are given a value, assigns a number to a value if not
function operatorClick(op) {
  operator = op;
  assignNum(displayVal);
  if (firstNum != null && secondNum != null) {
    firstNum = operate(firstNum, secondNum, operator);
  }
}

// Decides which number to assign the current display value to
function assignNum(num) {
  if (firstNum === null) {
    firstNum = parseFloat(displayVal);
  } else {
    secondNum = parseFloat(displayVal);
  }
  displayVal = "";
}

// Displays the current value that has been entered
function displayNum(numString) {
  if (isEqualsPressed === true) {
    displayVal = "";
  }
  displayVal = displayVal + numString;
  const display = document.querySelector(".display");
  display.textContent = displayVal;
}

function clear() {
  firstNum = null;
  secondNum = null;
  operator = "";
  displayVal = "";
  displayNum("");
}

// Make every number button update the display when clicked
const numList = document.querySelectorAll(".num");
numList.forEach((button) => {
  button.addEventListener("click", () => displayNum(button.textContent));
});

// Make every operator button either evaluate the current equation or assign a value when clicked
const operatorList = document.querySelectorAll(".operator");
operatorList.forEach((button) => {
  button.addEventListener("click", () => operatorClick(button.textContent));
});

// Make the equals button solve the equation on click
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () =>
  operate(firstNum, secondNum, operator)
);
equalsButton.addEventListener("click", () => updateIsEqualsPressed());

// Make the clear button clear all variables on click
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => clear());
