// Declaring and initializing an array for all houses to be stored in
let allHouses = [];

// Async function that doesn't block the rest of the code while it is fetching the data
async function renderHouses() {
    allHouses = await fetchHouses();
    // Passing all the houses fetched to the renderFilteredHouses function as an argument
    renderFilteredHouses(allHouses);
}

// Checkboxes
function filterHouses() {
    // Creating vars for the checkboxes and the .checked "value"
    const sizeChecked = document.getElementById("size-check").checked;
    const priceChecked = document.getElementById("price-check").checked;
    // Declaring and initializing, and setting equal to allHouses array
    let filteredHouses = allHouses;

    // Based on the checkboxes, adding conditions to use the filter method for size and price
    // Both conditions are true
    if (sizeChecked === true && priceChecked === true) {
        filteredHouses = filteredHouses.filter(house => house.size < 200 && house.price < 1000000);
    } else if (sizeChecked === true) {
        filteredHouses = filteredHouses.filter(house => house.size < 200);
    } else if (priceChecked === true) {
        filteredHouses = filteredHouses.filter(house => house.price < 1000000);
    }
    // Calls the renderFilteredHouses passing along the filteredHouses array based on the checkboxes
    renderFilteredHouses(filteredHouses);
}

// Taking the filtered houses from the checkbox-function, and using that as an argument for which houses should be shown on the page/rendered
function renderFilteredHouses(filteredHouses) {
    // Getting the houses div again and clearing the current contents of it
    const houseDiv = document.getElementById("houses");
    houseDiv.innerHTML = "";

    // Loop through the filtered houses
    filteredHouses.forEach(house => {
        const houseContainer = createHouseContainer(house);
        houseDiv.appendChild(houseContainer);
    });
}

function createHouseContainer(house) {
    const houseContainer = document.createElement("div");
    houseContainer.className = "houseContainer";

    // Creating the image element
    let image = document.createElement("img");
    image.src = `images/${house.image}`;
    image.className = "houseImage";
    // Creating p element header
    let header = document.createElement("p");
    header.className = "houseHeader";
    header.innerHTML = house.address;
    // Creating p element with house description
    let description = document.createElement("p");
    description.className = "houseDescription";
    description.innerHTML = house.description;
    // Creating an element for size
    let size = document.createElement("p");
    size.className = "HouseSize";
    size.innerHTML = 'Size: ' + house.size + ' sq. m.';
    // Lastly the price p element
    let price = document.createElement("p");
    price.className = "HousePrice";
    // Format the price with commas
    let numberStr = new Intl.NumberFormat("fi-FI").format(house.price);
    // Unicode € symbol
    price.innerHTML = 'Price: \u20AC' + numberStr;
    // Add created elements to the container
    houseContainer.appendChild(image);
    houseContainer.appendChild(header);
    houseContainer.appendChild(description);
    houseContainer.appendChild(size);
    houseContainer.appendChild(price);
    // Add the house container to the div
    return houseContainer;
}

// Fetching the houses from the JSON file
async function fetchHouses() {
    try {
        let response = await fetch("houses.json");
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// Add event listeners to the checkboxes to trigger the filter function
document.getElementById("size-check").addEventListener("change", filterHouses);
document.getElementById("price-check").addEventListener("change", filterHouses);

// Initial rendering of all houses
renderHouses();
