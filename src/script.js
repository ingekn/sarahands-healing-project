const imageContainer = document.querySelector(".image-container");
const images = Array.from(imageContainer.querySelectorAll("img"));
let currentIndex = 0; // Start with the first image
const previousArrow = document.querySelector(".previous");
const nextArrow = document.querySelector(".next");

// Variable to hold the interval ID
let intervalId;

// Function to show the image at a given index
function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none"; // Hide all images
  });
  images[index].style.display = "block"; // Show the selected image
}

// Function to show the next image
function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Wrap around to the first image if end is reached
  }
  showImage(currentIndex);
}

// Function to show the previous image
function showPreviousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Wrap around to the last image if beginning is reached
  }
  showImage(currentIndex);
}

// Start with the initial image
showImage(currentIndex);

// Set up the interval to automatically transition to the next image every 3 seconds
intervalId = setInterval(showNextImage, 3000);

// Function to stop the automatic image transition
function stopSlider() {
  clearInterval(intervalId);
}

// Add event listeners to the image container and arrows
imageContainer.addEventListener("click", stopSlider);
previousArrow.addEventListener("click", function () {
  showPreviousImage();
  stopSlider();
});
nextArrow.addEventListener("click", function () {
  showNextImage();
  stopSlider();
});
// Remove the event listener on the image container since the anchor links handle navigation
// imageContainer.removeEventListener("click", stopSlider);
// Event listener for each image
// images.forEach((image, index) => {
//     image.addEventListener("click", () => {
//         // Stop the slider
//         stopSlider();
//         // Redirect the user to a specific part of the page or another URL
//         const targetUrl = '#section' + (index + 1); // Replace with desired URL or section ID
//         window.location.hash = targetUrl; // Use window.location.hash to navigate to a specific section of the page
//     });
// });
