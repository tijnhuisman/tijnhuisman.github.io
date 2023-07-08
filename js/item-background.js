// Get all carousel items
const carouselItems = document.querySelectorAll('.carousel-item');

// Loop through each carousel item
carouselItems.forEach(item => {
  // Get the image element
  const image = item.querySelector('img');
  
  // Create a new Image object and set its source to the same as the image element
  const img = new Image();
  img.src = image.src;
  
  // Wait for the image to load
  img.onload = () => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    
    // Set the canvas dimensions to be the same as the image
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw the image onto the canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    // Get the average color of the image using the canvas pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;
    for (let i = 0; i < pixelData.length; i += 4) {
      r += pixelData[i];
      g += pixelData[i + 1];
      b += pixelData[i + 2];
      count++;
    }
    const avgR = Math.round(r / count);
    const avgG = Math.round(g / count);
    const avgB = Math.round(b / count);
    
    // Set the background color of the carousel item to be the average color of the image
    item.style.backgroundColor = `rgba(${avgR}, ${avgG}, ${avgB}, .8)`;
  };
});


