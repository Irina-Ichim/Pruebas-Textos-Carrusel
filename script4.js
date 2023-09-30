$(document).ready(function(){
    gsap.from(".masonry-item", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });
  });
  
  