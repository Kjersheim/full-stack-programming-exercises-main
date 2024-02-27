// declaring and initializing variables from the document globally so they are accessible
const dropdownList = document.getElementById("dropdown-list");
const outputBox = document.querySelector(".output-container");
const partyTypeInput = document.getElementById("party-type");
let selectedColor;

// Function to get the input text for written party, and printing that using textContent in the p element party-output
function updateOutputParty() {
    const partyOutput = document.getElementById("party-output");
    partyOutput.textContent = partyTypeInput.value;
}

// Function that fetches the chosencolor selection in the dropdownlist, 
// and writes out the textstring when it notices "onchange" in the select element. 
function updateOutputColorText() {
    const colorOutput = document.getElementById("chosencolor-output");
    const selectedValue = dropdownList.value;

    // Checking if the selection has a value and then chosing that, or if the value is empty, aka the "Click me!" is selected.
    if (selectedValue !== "") {
        selectedColor = selectedValue;
        colorOutput.textContent = `Chosen color: ${selectedColor}`;
    } else {
        colorOutput.textContent = "Chosen color:";
    }
}

// Changes the background color of the output-container class div element, onclick from the button
function changeBackgroundColor(color) {
    outputBox.style.backgroundColor = color;
}

// Adding an event listener to the partyTypeInput, the input element, 
// which reacts on imput and initializes(?) the function to update the partyoutput-text
partyTypeInput.addEventListener("input", updateOutputParty);