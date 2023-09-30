const slides = document.querySelectorAll('.slide');

let rotateY = 0;

setInterval(() => {
  rotateY += 72;
  slides.forEach((slide, index) => {
    slide.style.transform = `rotateY(${rotateY + 72 * index}deg) translateZ(500px)`;
  });
}, 4000);

  