const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = Math.min(currentIndex + 1, 4);
    updateCarousel();
  } else if (event.key === 'ArrowLeft') {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  }
});
