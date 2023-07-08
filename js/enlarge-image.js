const feedImages = document.querySelectorAll('.carousel-item img, #modalContent img');
feedImages.forEach(img => {
  img.addEventListener('click', function(event) {
    const clickedImage = this;
    
    // Create a new image element
    const enlargedImg = document.createElement('img');
    const header = document.querySelector('header');

    // Set the source of the new image to the clicked image's source
    enlargedImg.src = clickedImage.src;
    // Add a class to the new image for styling
    enlargedImg.classList.add('enlarged-image');
    
    // Create an overlay element
    const overlay = document.createElement('div');
    // Add a class to the overlay for styling
    overlay.classList.add('overlay');

    // Create a close button element
    const closeButton = document.getElementById('close');
    
    // Append the new image, the overlay, and the close button to the document body
    document.body.appendChild(enlargedImg);
    document.body.appendChild(overlay);
    
    // Add the .modal-open class to the body
    document.body.classList.add('modal-open');
    header.classList.add('modal-open');
    header.classList.add('visible');


    // Add an event listener to the overlay to remove the enlarged image and overlay when clicked
    overlay.addEventListener('click', function() {
      closeEnlargedImg();
    });

    // Add an event listener to the close button to remove the enlarged image and overlay when clicked
    closeButton.addEventListener('click', function() {
      closeEnlargedImg();
    });

    function closeEnlargedImg() {
      document.body.removeChild(enlargedImg);
      document.body.removeChild(overlay);

      // Remove the .modal-open class from the body
      document.body.classList.remove('modal-open');
      header.classList.remove('modal-open');
    header.classList.add('visible');


      // Show the clicked image again
      clickedImage.style.opacity = '1';
    }
  });
});
