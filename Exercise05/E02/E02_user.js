// const userModule = require('./userModule');

// const name = userModule.getName();
// const location = userModule.getLocation();
// const birthday = userModule.birthday;

// Also testing with deconstructing:

// importing the birtDate const and the two functions from the file in the same directory "." and file named userModule
const { birthDate, myLocation, myName } = require("./userModule");

// Calling the myName function and setting it to the const name
const name = myName();
// Calling the myLocation function and setting it to the const city
const city = myLocation();

// printing out the imported variables to the log in the asked format
console.log(`${name} lives in ${city} and is born on ${birthDate}`)