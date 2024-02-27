// Creating a function to find the biggest number. Initially considering to check whether or firstNumber is bigger than secondNumber, and so on in a few if statements
// but then finding information about Math module comparing to find the maximum value
function findBiggestNumber() {
    let num1 = parseFloat(document.getElementById("firstNumber").value);
    let num2 = parseFloat(document.getElementById("secondNumber").value);
    let num3 = parseFloat(document.getElementById("thirdNumber").value);

    let max = Math.max(num1, num2, num3);
    document.getElementById("result").textContent = `Largest number: ${max}`
}