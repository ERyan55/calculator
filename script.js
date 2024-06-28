// Variable initalizations
let firstNum = null;
let secondNum = null;
let operator = null;
let displayVal = "";

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
  return num1 * num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

// Decides whether to operate if both numbers are given a value, assigns a number to a value if not
function operatorClick(num, op) {
  assignOperator(op);
  if (firstNum != null && secondNum != null) {
    operate(firstNum, secondNum, operator);
  } else {
    assignNum(num);
  }
}

// Assigns the operator
function assignOperator(string) {
  operator = string;
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
  displayVal = displayVal.concat(numString);
  const display = document.querySelector(".display");
  display.textContent = displayVal;
}
