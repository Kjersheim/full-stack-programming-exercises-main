// Initialize the application
function init() {
  let infoText = document.getElementById('infoText');
  infoText.innerHTML = 'Loading todos, please wait...';
  loadTodos(); // Load existing todos from the server
}

// Function to load todos from the server
async function loadTodos() {
  let response = await fetch('http://localhost:3000/todos'); // Fetch todos from server
  let todos = await response.json(); // Parse the JSON response
  console.log(todos); // Log todos to the browser's console for debugging
  showTodos(todos); // Display todos in the UI
}

// Function to create an individual todo list item
function createTodoListItem(todo) {
  let li = document.createElement('li'); // Create an <li> element for a todo
  let li_attr = document.createAttribute('id'); // Create an ID attribute for the todo
  li_attr.value = todo._id; // Set the ID attribute value to the todo's ID
  li.setAttributeNode(li_attr); // Attach the ID attribute to the <li> element
  let text = document.createTextNode(todo.text); // Create a text node with the todo text
  li.appendChild(text); // Add the text node to the <li> element
  let span = document.createElement('span'); // Create a <span> element for deleting the todo
  let span_attr = document.createAttribute('class'); // Create a class attribute for the <span>
  span_attr.value = 'delete'; // Set the class attribute value
  span.setAttributeNode(span_attr); // Attach the class attribute to the <span>
  let x = document.createTextNode(' x '); // Create a text node with 'x'
  span.appendChild(x); // Add the 'x' text node to the <span>
  span.onclick = function() { removeTodo(todo._id); }; // Add an event listener to delete the todo
  li.appendChild(span); // Add the <span> element to the <li> element
  return li; // Return the created <li> element
}

// Function to display todos in the UI

function showTodos(todos) {
  let todosList = document.getElementById('todosList'); // Get the <ul> element for todos
  let infoText = document.getElementById('infoText'); // Get the infoText element
  let infoContainer = document.querySelector('.info-container'); // Get the info container

  if (todos.length === 0) {
    infoText.innerHTML = 'No Todos'; //If there are no todos, display "No Todos"
    infoContainer.style.display = 'block'; // Show the container
  } else {
    todos.forEach(todo => {
      let li = createTodoListItem(todo); // Create a <li> element for each todo
      todosList.appendChild(li); // Add the <li> to the <ul>
    });
    infoText.innerHTML = ''; // Clear the "No Todos" message
    infoContainer.style.display = 'none'; // Hide the container when there are todos
  }
}



// Function to add a new todo
async function addTodo() {
  let newTodo = document.getElementById('newTodo'); // Get the input element for new todos
  const data = { 'text': newTodo.value }; // Create data object with the new todo text
  const button = document.querySelector('button');
  button.disabled = true; // Disable the button while the request is in progress
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST', // Send a POST request to add the new todo
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Send the new todo as JSON in the request body
  });

  button.disabled = false; // Re-enable the button

  if (response.ok) {
    let todo = await response.json(); // Parse the JSON response
    let todosList = document.getElementById('todosList'); // Get the <ul> element
    let li = createTodoListItem(todo); // Create a <li> element for the new todo
    todosList.appendChild(li); // Add the new <li> to the <ul>
    let infoText = document.getElementById('infoText'); // Get the infoText element
    infoText.innerHTML = ''; // Clear the info text
    newTodo.value = ''; // Clear the input field
  } else {
    console.error('Failed to add todo:', response.statusText);
    // Handle the error here, e.g., show an error message to the user
  }
  updateInfoContainer(); // Update the info container
}

// Function to remove a todo
async function removeTodo(id) {
  const response = await fetch('http://localhost:3000/todos/' + id, {
    method: 'DELETE',
  });
  let responseJson = await response.json();
  let li = document.getElementById(id);
  li.remove();
  updateInfoContainer(); // Update the info container
}

function updateInfoContainer() {
  let todosList = document.getElementById('todosList');
  let infoText = document.getElementById('infoText');
  let infoContainer = document.querySelector('.info-container');

  if (todosList.children.length === 0) {
    infoText.innerHTML = 'No Todos';
    infoContainer.style.display = 'block'; // Show the container
  } else {
    infoText.innerHTML = '';
    infoContainer.style.display = 'none'; // Hide the container when there are todos
  }
}
