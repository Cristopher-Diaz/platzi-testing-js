function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null; // Handle division by zero
  }
  return a / b;
}

function average(a, b) {
  return sum(a, b) / 2;
}

module.exports = {
  sum,
  multiply,
  divide,
  average
};
