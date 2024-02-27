// Creating a function to add text as this will occur multiple times

function addText(text){
    //fetching div element where the concert texts are posted, which here also works as the parent element for the append child further down
    const printText = document.getElementById("concertText");
    //creating a new paragraph and adding the text from the text-parameter
    const newParagraphElement = document.createElement("p");
    newParagraphElement.textContent = text;
    // adding the new paragraph as a child element
    printText.appendChild(newParagraphElement);

    // Adding a time delay for the fade effect on the p.show from css.
    setTimeout(() => {
        newParagraphElement.classList.add("show");
    }, 10);
}

let fireworksRunning = true; // Adding a boolean variable to work as a notification on the fireworks later

function startConcert(){
    addText("OMG - Lady Gaga start singing!");
   
    function fireworks(){
        if (!fireworksRunning){
            return;
        }
        addText("NICE - fireworks!");
        setTimeout(fireworks, 5000)
    }
    // calling the fireworks function to run every 5000 milliseconds
    setTimeout(fireworks, 5000);

    // Ending the concert after 20000 milliseconds
    setTimeout(function(){
        fireworksRunning = false; // ending the fireworks messages
        addText("WOW - It was the best concert in my life...");
    }, 20000);
}


// Start the concert when the page is loaded
window.addEventListener("load", startConcert);