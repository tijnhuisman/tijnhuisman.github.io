const carousel = document.querySelector('.carousel-wrapper');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

carouselPrev.addEventListener('click', () => {
  carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
});

carouselNext.addEventListener('click', () => {
  carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
});

const slides = document.querySelectorAll('.carousel-item');

carousel.addEventListener('scroll', () => {
  const carouselRect = carousel.getBoundingClientRect();
  const carouselCenter = carouselRect.left + carouselRect.width / 2;

  slides.forEach((slide) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;

    if (slideRect.left <= carouselCenter && slideRect.right >= carouselCenter) {
      slide.classList.add('focused');
    } else {
      slide.classList.remove('focused');
    }
  });
});




