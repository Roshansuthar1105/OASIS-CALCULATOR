let expression = '';

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    // Handle invalid expressions
    expression = '';
    updateDisplay('Error');
  }
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function updateDisplay(text = '') {
  const display = document.getElementById('display');
  display.value = text || expression;
}
