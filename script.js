let inputDisplay = document.getElementById('input');
    let resultDisplay = document.getElementById('result');
    let currentInput = '0';
    
    function appendToDisplay(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        inputDisplay.innerHTML = currentInput;
    }
    
    function clearDisplay() {
        currentInput = '0';
        inputDisplay.innerHTML = currentInput;
        resultDisplay.innerHTML = '0';
    }
    
    function calculateResult() {
        try {
            let result = eval(currentInput).toString();
            resultDisplay.innerHTML = result;
        } catch (error) {
            resultDisplay.innerHTML = 'Error';
        }
    }