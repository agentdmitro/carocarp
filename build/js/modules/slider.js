const swiper = new Swiper('.banner-slider', {
  slidesPerView: 1,
  watchOverflow: true,
  effect: 'fade',
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1200,
  pagination: {
    el: '.banner-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      direction: 'vertical',
    },
  },
});

// const swiper2 = new Swiper('.features-slider', {
//   direction: 'vertical',
//   spaceBetween: 1,
//   slidesPerView: 3,
//   centeredSlides: true,
//   roundLengths: true,
//   loop: true,
//   loopAdditionalSlides: 30,

// });

const swiper2 = new Swiper('.features-slider', {
  direction: 'vertical',
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,
  mousewheel: true,
  roundLengths: true,
  initialSlide: 1,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: '.features-bttn-next',
    prevEl: '.features-bttn-prev',
  },
  pagination: {
    el: '.features-pagination',
    clickable: true,
  },
});

const swiper3 = new Swiper('.gallery-slider', {
  slidesPerView: 'auto',
  loop: true,
  freeMode: true,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.gallery--bttn-next',
    prevEl: '.gallery--bttn-prev',
  },
});


const swiper4 = new Swiper('.category__slider', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: '.category-button-next',
    prevEl: '.category-button-prev',
  },
});



// $('.swiper-button-prev').remove();
// $('.swiper-button-next').remove();

// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 1,
// 	watchOverflow: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	spaceBetween: 20,
// 	autoHeight: true
// });
