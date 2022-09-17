function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function isInteger(num) {
  return Number.isInteger(num)
}

export { subtract, add, isInteger };
