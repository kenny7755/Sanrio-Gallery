// import Swiper JS
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  });
  
