`use strict`;

const myWords = ["JavaScript", "is", "excellent!"]
// First attempt is printing each item of the array to the log
// for (let i = 0; i < selection.length; i++){
//     console.log(selection[i])
// }

// Initializing an empty sentence variable
let mySentence = "";

// Concatenating the words in the array and adding a space after each word
for(let word of myWords){
    mySentence += word + " ";
}

// Removing whitespace at the end
mySentence = mySentence.trim();

// Printing to console
console.log(mySentence);

