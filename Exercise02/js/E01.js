// Exercise 01 - forms [4p]

function displaySum() {
    let firstNumber = parseFloat(document.getElementById("num1").value);
    let secondNumber = parseFloat(document.getElementById("num2").value);

    // Checking if there are numbers stored from the inputvalues, if they are it performs the calculation.
    if (!isNaN(firstNumber) && !isNaN(secondNumber)){
        let resultSum = document.getElementById("result");
        resultSum.textContent = "Sum: " + (firstNumber + secondNumber);
    }
    // else it returns an error message
    else{
        let resultSum = document.getElementById("result")
        resultSum.textContent = "Please type in numbers in the input-boxes"
    }
    
}