const images = document.querySelectorAll(".slider img"); // Get all the images
let currentIndex = 0; // Start with the first image

function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none"; // Hide all images
  });
  images[index].style.display = "block"; // Show the selected image
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // Wrap around to the first image if end is reached
  }
  showImage(currentIndex);
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Wrap around to the last image if beginning is reached
  }
  showImage(currentIndex);
}

showImage(currentIndex); // Show the initial image

setInterval(nextImage, 4000); // Automatically transition to the next image every 3 seconds (adjust the duration as needed)
