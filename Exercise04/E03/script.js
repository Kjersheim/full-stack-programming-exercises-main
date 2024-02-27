// Define variables
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');
let names = [];
let currentIndex = -1;
// Fetch the names from the json file
fetch('data.json').then(response => response.json()).then(data => {
	//adding the data to the names array created earlier
	names = data;
})	// in case of errors notify that  in the log
.catch(error => console.log('Error fetching data:', error));
// Filter names based on user input
function filterNames(input) {
	// Using the filter method to go through the names array and create a new array
	// containing names that start with the input from the searchbox. 
	return names.filter(function (name) {
		// Changing to lowercase to avoid case sensitive issues, and comparing the names array names 
		// and if they start with start with the input names
		return name.toLowerCase().startsWith(input.toLowerCase());
	});
}
// Display filtered names in the dropdown-list
function displayNames(input) {
	// Get an array of names that match the user's input
	const filteredNames = filterNames(input);
	// Clear the current search results in the dropdown
	searchResults.innerHTML = '';
	// Iterate through the filtered names and create list items for each
	filteredNames.forEach((name, index) => {
		// Create a list item element
		const listItem = document.createElement('li');
		// Set the text content of the list item to the name
		listItem.textContent = name;
		// Highlight the item on mouseover
		listItem.addEventListener('mouseover', () => {
			currentIndex = index;
			highlightItem();
		});
		// Select the item on click
		listItem.addEventListener('click', () => {
			selectItem(listItem.textContent);
		});
		// Append the list item to the search results list
		searchResults.appendChild(listItem);
	});
	// Show the dropdown if there are matching names, otherwise hide it
	searchResults.classList.toggle('active', filteredNames.length > 0);
}
// Highlight the currently selected item
function highlightItem() {
	// creating a variable equal to the li elements
	const filteredNames = searchResults.querySelectorAll('li');
	// iterating through the li elements 
	filteredNames.forEach((name, index) => {
		// Toggle the "highlighted" class based on whether the item is currently selected
		name.classList.toggle('highlighted', index === currentIndex);
	});
}
// Select an item from the dropdown and close it
function selectItem(itemText) {
	// Setting the selected itemtext as the value of the search input, 
	// then removing the active class (and by that hiding the item)
	searchInput.value = itemText;
	searchResults.classList.remove('active');
	// Reset the currentIndex to -1 to indicate no item is selected
	currentIndex = -1;
}
// Close the dropdown when clicking outside of it
document.addEventListener('click', event => {
	// Check if the event target is not within the searchResults element
	// and similarily as above removing the active class
	if (!searchResults.contains(event.target)) {
		searchResults.classList.remove('active');
	}
});
// Event listener for user input in the search input field
searchInput.addEventListener('input', event => {
	// Get the current input value
	const inputValue = event.target.value;
	// Display filtered names in the dropdown based on the input value
	displayNames(inputValue);
});
// Adding event listeners to keyboard events, arrow up, down, enter and backspace
searchInput.addEventListener('keydown', event => {
	// Creating a variable for the list items in the searchResults div
	const filteredNames = searchResults.querySelectorAll('li');
	// If statements checking if certain keys are pressed down
	if (event.key === 'ArrowDown') {
		// preventing the default scrolling
		event.preventDefault();
		// switching to the next item, and when coming to the end of the list it "loops" back so it goes back to 0
		currentIndex = (currentIndex + 1) % filteredNames.length;
		// calling to highlight and the visability functions
		highlightItem();
		ensureVisible();
	} else if (event.key === 'ArrowUp') {
		event.preventDefault();
		currentIndex = (currentIndex - 1 + filteredNames.length) % filteredNames.length;
		highlightItem();
		ensureVisible();
	} else if (event.key === 'Enter') {
		// Check if an item is selected and the Enter key is pressed
		if (currentIndex >= 0 && currentIndex < filteredNames.length) {
			// Select the item and close the dropdown
			selectItem(filteredNames[currentIndex].textContent);
		}
	} else if (event.key === 'Backspace' && searchInput.value === '') {
		// Show all names when Backspace is pressed with an empty input
		displayNames('');
	}
});
// Ensure the selected item is visible in the dropdown
function ensureVisible() {
	// Find the currently selected item in the dropdown
	const selectedItem = searchResults.querySelector('.highlighted');
	// Check if a selected item exists
	if (selectedItem) {
		// Scroll the selected item into view with smooth scrolling
		selectedItem.scrollIntoView({
			// Apply smooth scrolling animation 
			behavior: 'smooth',
			// Stopping close to the edge of the screen, so the item remains visible
			block: 'nearest'
		});
	}
}