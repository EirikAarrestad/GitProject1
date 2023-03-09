// Get references to the HTML elements we need
const inputNumberOne = document.querySelector("#inputNr1");
const inputNumberTwo = document.querySelector("#inputNr2");
const output = document.querySelector("#output");
const operator = document.querySelector("#operatorSelect");
const calculateButton = document.querySelector("#calculateButton");
const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click", () => {
    inputNumberOne.value = "";
    inputNumberTwo.value = "";
    output.textContent = "";
});

// Add a click event listener to the calculate button
calculateButton.addEventListener("click", () => {
    // Get the values of the input numbers
    var numberOne = Number(inputNumberOne.value);
    var numberTwo = Number(inputNumberTwo.value);

    // Check if the input values are valid numbers
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        output.textContent = "Error: Please enter valid numbers";
        return; // stop further execution
    }

    // Determine which operator was selected
    var operatorType = operator.value;

    // Calculate the result based on the selected operator
    switch (operatorType) {
        case "addition":
            result = numberOne + numberTwo;
            break;
        case "subtraction":
            result = numberOne - numberTwo;
            break;
        case "multiplication":
            result = numberOne * numberTwo;
            break;
        case "division":
            result = numberOne / numberTwo;
            break;
    }

    // Display the result in the output element
    output.textContent = result;
});
