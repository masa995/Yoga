const sliderProgram = document.querySelector('.programs__swiper-container');
const sliderVideo = document.querySelector('.video__swiper-container');
const playButtonVideo = document.querySelectorAll('.js-btn-play');
const slideVideo = document.querySelectorAll('.video');

const swiperProgram = new Swiper(sliderProgram, {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 25,

  breakpoints: {
    650: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 60
    },

    1130: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 70

    }
  },

  pagination: {
    el: '.program-slider__pagination',
    clickable: true,
  },
});

const swiperVideo = new Swiper(sliderVideo, {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,

  pagination: {
    el: '.video-slider__pagination',
    clickable: true,
  },
});

playButtonVideo.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.js-slide-video').querySelector('video');
    video.play();
    e.currentTarget.style.display = 'none';
  })
});

swiperVideo.on('transitionEnd', function () {
  let video = document.querySelectorAll('.js-slide-video video');
  video.forEach((el) => {
    el.pause();
    el.currentTime = 0
  });

  playButtonVideo.forEach((el) => {
    el.style.display = 'block';
  });
})

body.addEventListener('click', (e) => {
  if (!e.target.closest('.js-slide-video')) {
    let video = document.querySelectorAll('.js-slide-video video');
    video.forEach((el) => {
      el.pause();
    });

    playButtonVideo.forEach((el) => {
      el.style.display = 'block';
    });
  }
})