let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function calculate() {
    let tokens = currentInput.split(/\b/);
    let operand1 = parseFloat(tokens[0]);
    let operator = tokens[1];
    let operand2 = parseFloat(tokens[2]);
    
    let result;
    
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                document.getElementById("display").value = "Error";
                return;
            }
            break;
        default:
            document.getElementById("display").value = "Invalid";
            return;
    }

    document.getElementById("display").value = result;
    currentInput = result.toString();
}

