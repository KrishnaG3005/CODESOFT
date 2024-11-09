let displayValue = '';
let currentOperator = null;
let firstOperand = null;

// Append a number to the display
function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').innerText = displayValue;
}

// Choose an operator and store the first operand
function chooseOperator(operator) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    }
    currentOperator = operator;
    displayValue = '';
}

// Clear the display and reset values
function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    currentOperator = null;
    document.getElementById('display').innerText = '0';
}

// Calculate the result when the "=" button is pressed
function calculateResult() {
    if (firstOperand === null || displayValue === '') return;

    let secondOperand = parseFloat(displayValue);
    let result;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    document.getElementById('display').innerText = result;
    firstOperand = result;
    displayValue = '';
}
