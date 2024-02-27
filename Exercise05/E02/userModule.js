// Defining a function that returns my name
function myName(){
    return "Andreas Kjersheim";
};

// Defining another function that returns the city I live in
function myLocation(){
    return "Espoo";
};

// Defining a constant variable that contains my birthdate in the format asked
const birthDate = "26.04.1984";

// Exporting the 2 functions and the birtdate, using the same names so I can use the "shortcut" and not writing x : x,
// making it possible to reach the data otuside the module
module.exports = {
    birthDate,
    myName,
    myLocation
};
