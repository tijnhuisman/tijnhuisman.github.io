// Function to convert RGB values to hexadecimal
function rgbToHex(red, green, blue) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexRed = componentToHex(red);
  const hexGreen = componentToHex(green);
  const hexBlue = componentToHex(blue);

  return `#${hexRed}${hexGreen}${hexBlue}`;
}

// Create an <img> element
const img = new Image();

// Set the source of the image
img.src = '../images/background.webp';

// Create a canvas element
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Initialize averageHexColor variable
let averageHexColor;

// Wait for the image to load
img.onload = () => {
  // Set the dimensions of the canvas to match the image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the image onto the canvas
  context.drawImage(img, 0, 0);

  // Get the image data from the canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

  // Initialize variables for the total RGB values
  let totalRed = 0;
  let totalGreen = 0;
  let totalBlue = 0;

  // Loop through each pixel in the image
  for (let i = 0; i < imageData.length; i += 4) {
    const red = imageData[i];
    const green = imageData[i + 1];
    const blue = imageData[i + 2];

    // Add the RGB values to the totals
    totalRed += red;
    totalGreen += green;
    totalBlue += blue;
  }

  // Calculate the average RGB values
  const pixelCount = imageData.length / 4;
  const averageRed = Math.round(totalRed / pixelCount);
  const averageGreen = Math.round(totalGreen / pixelCount);
  const averageBlue = Math.round(totalBlue / pixelCount);

  // Convert the average RGB values to hexadecimal
  averageHexColor = rgbToHex(averageRed, averageGreen, averageBlue);

  // Use the average color as needed
  // console.log('Average Color (RGB):', `rgb(${averageRed}, ${averageGreen}, ${averageBlue})`);
  // console.log('Average Color (Hex):', averageHexColor);

  // Use averageHexColor here or pass it to another function
};

// Function to update the theme color based on scrolling and preferred color scheme
function updateThemeColor() {
  // Check the preferred color scheme
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  let themeColor;

  // Set the theme color based on the preferred color scheme
  if (mediaQuery.matches) {
    themeColor = '#ffffff'; // Light theme color
  } else {
    themeColor = '#21252e'; // Dark theme color
  }

  // Get the header element and its height
  const header = document.querySelector('#hero-header');
  const headerHeight = header.offsetHeight;

  // Set the --accent variable to the averageHexColor on page load
  document.documentElement.style.setProperty('--accent', averageHexColor);

  // Function to handle scroll events and update the theme color accordingly
  function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var newThemeColor = scrollTop > headerHeight ? themeColor : averageHexColor;

    // Update the meta tag for theme color
    var metaTag = document.getElementById('theme-color');
    metaTag.setAttribute('content', newThemeColor);
  }

  // Add event listener for scroll events
  window.addEventListener('scroll', handleScroll);

  // Call the handleScroll function initially to set the theme color on page load
  handleScroll();
}

// Add event listener for the load event of the window
window.addEventListener('load', updateThemeColor);
