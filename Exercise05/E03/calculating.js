// Importing/preparing the filesystem module, fs
const fs = require("fs");

fs.readFile("./numbers.txt", (error, data) => {
    if (error) {
        console.log(`There was an error: ${error}`);
        return;
    }
    
    // Convert the data buffer to a string
    const dataAsString = data.toString();
    
    // Split the string by commas and map the resulting strings to numbers
    const numbersFromFile = dataAsString.split(',').map(Number);

    // Declaring and initializing a sum variable
    let sum = 0;
    // Looping through the array with the numbers collected from the file, adding them to sum
    for (let i = 0; i < numbersFromFile.length; i++){
        sum += numbersFromFile[i]
    }
    console.log("Reading file and calculating a sum...");
    console.log(`Sum is ${sum}`)
});