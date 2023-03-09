// Get references to the HTML elements we need
const inputNumberOne = document.querySelector("#inputNr1");
const inputNumberTwo = document.querySelector("#inputNr2");
const output = document.querySelector("#output");
const operator = document.querySelector("#operatorSelect");
const calculateButton = document.querySelector("#calculateButton");
const clearButton = document.querySelector("#clearButton");

// Add a click event listener to the clear button
clearButton.addEventListener("click", () => {
    // Clear the input fields and output area
    inputNumberOne.value = "";
    inputNumberTwo.value = "";
    output.textContent = "";
});

// Add a click event listener to the calculate button
calculateButton.addEventListener("click", () => {
    // Get the values of the input numbers
    const numberOne = Number(inputNumberOne.value);
    const numberTwo = Number(inputNumberTwo.value);

    // Check if the input values are valid numbers
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        // Display an error message if input is not a number
        output.textContent = "Error: Please enter valid numbers";
        return; // stop further execution
    }

    function showResults(nr1, operator, nr2, result) {
        output.textContent = `${nr1} ${operator} ${nr2} = ${result}`;
    }

    // Determine which operator was selected
    const operatorType = operator.value;

    let operatorString;
    let result;
    switch (operatorType) {
        case "addition":
            // Perform addition operation
            operatorString = "+";
            result = numberOne + numberTwo;
            break;
        case "subtraction":
            // Perform subtraction operation
            operatorString = "-";
            result = numberOne - numberTwo;
            break;
        case "multiplication":
            // Perform multiplication operation
            operatorString = "*";
            result = numberOne * numberTwo;
            break;
        case "division":
            // Check if dividing by zero
            if (numberTwo === 0) {
                output.textContent = "Error: Cannot divide by zero";
                return; // stop further execution
            }
            // Perform division operation
            operatorString = "/";
            result = numberOne / numberTwo;
            break;
        case "exponent":
            // Perform exponent operation
            operatorString = "^";
            result = Math.pow(numberOne, numberTwo);
            break;
        default:
            // Display an error message if no operator is selected
            output.textContent = "Error: Please select an operator";
            return; // stop further execution
    }
    showResults(numberOne, operatorString, numberTwo, result);
});
