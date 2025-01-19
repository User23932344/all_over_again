const table = document.getElementById('table');

function appendNumber(number) {
    table.value += number;
}

function appendOperator(operator) {
    if (table.value !== '' && !isNaN(table.value.slice(-1))) {
        table.value += operator;
    }
}

function toggleSing() {
    table.value = table.value * -1;
}

function sqrt() {
    table.value = (Math.pow(parseFloat(table.value), 1 / 2)).toString();
}

function square() {
    table.value *= (parseFloat(table.value)).toString();
}

function inverse() {
    table.value = (1 / parseFloat(table.value)).toString();
}

function calculatePercentage() {
    table.value = (parseFloat(table.value) / 100).toString();
}


//---------------------------------------------------------
function clearTable() {
    table.value = '';
}

function clearEntry() {
    table.value = table.value.slice(0, table.value.lastIndexOf(' ') + 1);
}

function deleteLast() {
    table.value = table.value.slice(0, -1);
}
//---------------------------------------------------------
function calculateResult() {
    try {
        table.value = eval(table.value);
    } catch {
        table.value = 'Error';
    }
}