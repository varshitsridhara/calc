function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteValue() {
    document.getElementById('display').value = display.value.toString().slice(0, -1);
}

function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
    // try {
    //     document.getElementById('display').value = eval(document.getElementById('display').value);
    // } catch (error) {
    //     document.getElementById('display').value = 'Error';
    // }
}
