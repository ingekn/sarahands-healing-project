const images = document.querySelectorAll(".slider img"); // Get all the images
const dots = document.querySelectorAll(".dot"); // Get all the dots
let currentIndex = 0; // Start with the first image
let intervalId; // Variable to store the interval ID for automatic sliding

function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none"; // Hide all images
  });
  dots.forEach((dot) => {
    dot.classList.remove("active"); // Remove 'active' class from all dots
  });

  images[index].style.display = "block"; // Show the selected image
  dots[index].classList.add("active"); // Add 'active' class to the corresponding dot
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

function navigateToImage(index) {
  currentIndex = index;
  showImage(currentIndex);
  clearInterval(intervalId); // Clear the interval to stop automatic sliding
}

showImage(currentIndex); // Show the initial image

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    navigateToImage(index);
  });
});

intervalId = setInterval(nextImage, 3000); // Automatically transition to the next image every 3 seconds (adjust the duration as needed)
