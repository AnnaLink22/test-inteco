const projectSwiper = new Swiper('.projects__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: 'projects__swiper-button',
      },
});

const principalSwiper = new Swiper('.principals__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: '.principals__swiper-button',
      },
});

const companySwiper = new Swiper('.company__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: '.company__swiper-button',
      },
});