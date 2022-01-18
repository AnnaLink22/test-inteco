import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.projects__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    swipeHandler: '.projects__swiper-button'
  });