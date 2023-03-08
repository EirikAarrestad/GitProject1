//Declaring variables
const inputNumberOne = document.querySelector("#inputNr1");
const inputNumberTwo = document.querySelector("#inputNr2");

const output = document.querySelector("#output");
const operator = document.querySelector("#operatorSelect");

const calculateButton = document.querySelector("#button");

calculateButton.addEventListener("click", () => {
    // create variables for the numbers
    var numberOne = Number(inputNumberOne.value);
    var numberTwo = Number(inputNumberTwo.value);

    console.log(numberOne + numberTwo);
});
