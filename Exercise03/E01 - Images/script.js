function changeImage(imageId) {
    // Get the image element by its ID, the functions parameter - and refering to the concrete image id from the image-containers ID to each img element
    const imageElement = document.getElementById(imageId);

    // Get all the image elements with the class "image"
    const images = document.querySelectorAll(".image");

    // Hide all images by setting display to none
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Display the selected image, by making it visible again
    imageElement.style.display = "block";

    // Set the src attribute for the selected image
    imageElement.src = `images/${imageId}.JPG`;
}

// Function to show the initial image on page load
function showInitialImage() {
    // Call the changeImage function with the initial image id
    changeImage("image1");
}
