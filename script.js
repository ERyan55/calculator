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
  operator = null;
  displayVal = "";
  displayNum(result.toString());
  displayVal = "";
  return result;
}

// Decides whether to operate if both numbers are given a value, assigns a number to a value if not
function operatorClick(num, op) {
  assignOperator(op);
  if (firstNum != null && secondNum != null) {
    firstNum = operate(firstNum, secondNum, operator);
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

// Make every number button update the display when clicked
const numList = document.querySelectorAll(".num");
numList.forEach((button) => {
  button.addEventListener("click", displayNum());
});