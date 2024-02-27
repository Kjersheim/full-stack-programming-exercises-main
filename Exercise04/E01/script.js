async function renderHouses() {
    let houses = await fetchHouses();
    // Logging JSON data to console
    console.log(houses);
    // Finding the empty houses div
    let houseDiv = document.getElementById("houses");
    // Looping the JSON data
    houses.forEach(house => {
        // Creating a new div for a house posting 
        houseContainer = document.createElement("div");
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
        houseDiv.appendChild(houseContainer);
    });
}

async function fetchHouses() {
    try {
        let response = await fetch("houses.json");
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

renderHouses();
