// Creating/declaring and initializing a function that reads the value from the input field and saves it to a variable. 
function addItem(){
    let  listItem = document.getElementById("todo-text").value;
    // Creates three new variables ulNode to fetch the list, then preparing a li item with a textnode inside.
    // Textnode is the listItem fetched from the .value from input field
    let ulNode = document.getElementById("todo-list")
    let liNode = document.createElement("li");
    let liText = document.createTextNode(listItem);
    // Appending the input value/liText to the liNode, and then appending the liNode to the ulNode.
    liNode.appendChild(liText);
    ulNode.appendChild(liNode);
}

// Clearing the list
function removeAllItems(){
    // Declaring and initializing a var to get the todo-list
    let todoList = document.getElementById("todo-list");
    // Running a while-loop as long as the todoList contain elements
    while (todoList.hasChildNodes()){
        // Removes the first element in the todoList
        todoList.removeChild(todoList.firstChild)
    }
}

function inputList(){
    // Creating a new var for the todo-list
    const todoList = document.getElementById("todo-list");
    // Adding event listener todo-list, reacting to a mouse click then starting the function removeItem
    todoList.addEventListener("click", removeItem);
}
//Running the event listener to enable it
inputList()

function removeItem(event) {
    // Check if the clicked element is an "li" element
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}