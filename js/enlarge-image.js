// JavaScript code to enlarge the image
const feedImages = document.querySelectorAll('.feed-image img');
feedImages.forEach(img => {
  img.addEventListener('click', function() {
    // create a new image element
    const enlargedImg = document.createElement('img');
    // set the source of the new image to the clicked image's source
    enlargedImg.src = this.src;
    // add a class to the new image for styling
    enlargedImg.classList.add('enlarged-image');
    // create an overlay element
    const overlay = document.createElement('div');
    // add a class to the overlay for styling
    overlay.classList.add('overlay');
    // append the new image and the overlay to the document body
    document.body.appendChild(enlargedImg);
    document.body.appendChild(overlay);
    // add an event listener to the overlay to remove the enlarged image and overlay when clicked
    overlay.addEventListener('click', function() {
      document.body.removeChild(enlargedImg);
      document.body.removeChild(overlay);
    });
  });
});
