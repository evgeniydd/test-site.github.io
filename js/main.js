// jQuery Slider
$(document).ready(function() {
  $('.slider').slick({
    draggable: true,
    arrows: false,
    dots: false,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 1500
  });
});

// Navigation JS

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');
  // Toggle Nav

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
