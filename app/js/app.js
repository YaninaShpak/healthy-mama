import { isWebp } from "./modules/function-webp.js";
isWebp();

import { showMenu } from "./modules/menu.js";
showMenu();

new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 17,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

import { createSlider } from "./modules/slider.js";
createSlider();


