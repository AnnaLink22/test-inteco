const projectSwiper = new Swiper('.projects__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: '.projects__swiper-button',
      },
    breakpoints: {
        300: {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        },
        699: {
          pagination: {
            el: null,
          },
        }
    }
});

const principalSwiper = new Swiper('.principals__swiper', {
    speed: 400,
    spaceBetween: 100,
    allowTouchMove: true,
    loop: true,
    navigation: {
        nextEl: '.principals__swiper-button',
      },
    breakpoints: {
      300: {
        pagination: {
            el: '.principals__swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        },
        699: {
          pagination: {
            el: null,
          },
        }
    }
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