// Change these values as needed
const SCROLL_AMOUNT = 100; // How far the user needs to scroll
const TOGGLE_ID = "header-title"; // The ID of the element to toggle

// Get a reference to the element to toggle
const element = document.getElementById(TOGGLE_ID);

// Add a scroll event listener to the window object
window.addEventListener("scroll", function() {
  // Check if the user has scrolled enough
  if (window.scrollY > SCROLL_AMOUNT) {
    // If so, toggle the element's visibility
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }
});

const headerTitle = document.getElementById("header-title");

headerTitle.addEventListener("click", function() {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

