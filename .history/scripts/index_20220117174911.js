const projectSwiper = new Swiper('.projects__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    allowSlidePrev: false,
    navigation: {
        nextEl: '.projects__swiper-button',
      },
});

const principalSwiper = new Swiper('.principals__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    allowSlidePrev: false,
    navigation: {
        nextEl: '.principals__swiper-button',
      },
});