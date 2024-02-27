
function EvenOddFinder(){
    // Fetching input from html-form. Take the input and split by the comma, converting the string to a number with the Number function, before storing in an array
    let inputList = document.getElementById("input-list").value;
    inputArray = inputList.split(",").map(Number);
    
    
    // Initializing two arrays to store even and odd numbers
    let evenNumbers = [];
    let oddNumbers = [];

    // Looping through array to split into even and odd
    for (let i = 0; i < inputArray.length; i++){
        
        // If number divided by 2 has a remainder of 0, add to evenNumbers array
        if (inputArray[i] % 2 === 0){
            evenNumbers.push(inputArray[i]); // Adding to array of even numbers
        }
        else{
            oddNumbers.push(inputArray[i]); // Adding to array of odd numbers
        }
    };

    // parsing the results in the div with ID result
    let resultParse = document.getElementById("result");
    resultParse.innerHTML = `
    <p> Original list: ${inputArray.join(",")}<p>
    <br>
    <p> Odd numbers: ${oddNumbers.join(",")}</p>
    `;

    // Removed even numbers array after reading exercise again
    // <p> Even numbers: ${evenNumbers.join(",")}</p>
}