const languageSelector = document.getElementById("languageSelect");
// const languageSelector = document.querySelector(".languageSelect");
const languageSections = document.querySelectorAll(".language");

// Function to show the selected language and hide others
function updateLanguage() {
  const selectedLanguage = languageSelector.value;
  console.log(selectedLanguage);
  languageSections.forEach((section) => {
    if (section.classList.contains(selectedLanguage)) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

// Set default language on page load
updateLanguage("english");

// Update language on change
languageSelector.addEventListener("change", updateLanguage);

/////
//////
//// home page image slider
// Check if image slider elements are present
/////
//////
const imageContainer = document.querySelector(".image-container");
if (imageContainer) {
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
  if (previousArrow) {
    previousArrow.addEventListener("click", function () {
      showPreviousImage();
      stopSlider();
    });
  }
  if (nextArrow) {
    nextArrow.addEventListener("click", function () {
      showNextImage();
      stopSlider();
    });
  }
}
