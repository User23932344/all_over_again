const table = document.getElementById('table');
let currentValue = '';
let previousValue = '';  // Исправлено на правильное название переменной
let operator = '';
let resultCalculated = false;  // Исправлено на правильное название переменной

function appendNumber(number) {
    if (resultCalculated) {
        currentValue = '';
        resultCalculated = false;
    }
    currentValue += number;
    table.value = currentValue;
}

function appendOperator(op) {
    if (currentValue === '') {
        return;
    }
    if (previousValue !== '') {
        calculateResult();
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function toggleSign() {
    currentValue = (parseFloat(currentValue) * -1).toString();
    table.value = currentValue;
}

function sqrt() {
    currentValue = (Math.pow(parseFloat(currentValue), 1/2)).toString();
    table.value = currentValue;
}

function square() {
    currentValue = (Math.pow(parseFloat(currentValue), 2)).toString();
    table.value = currentValue;
}

function inverse() {
    currentValue = (1 / parseFloat(currentValue)).toString();
    table.value = currentValue;
}

function calculatePercentage() {
    currentValue = (parseFloat(currentValue) / 100).toString();
    table.value = currentValue;
}


//---------------------------------------------------------
function clearTable() {
    currentValue = '';
    operator = '';
    previousValue = '';  // Исправлено на правильное название переменной
    table.value = '';
}

function clearEntry() {
    currentValue = '';
    table.value = '';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    table.value = currentValue;
}
//---------------------------------------------------------
function calculateResult() {
    if (previousValue === '' || currentValue === '') return;
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }
    table.value = result;
    currentValue = result.toString();
    previousValue = '';
    operator = '';
    resultCalculated = true;
}
