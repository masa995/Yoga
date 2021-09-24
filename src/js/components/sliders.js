const sliderProgram = document.querySelector('.programs__swiper-container');
const sliderVideo = document.querySelector('.videos__swiper-container');
const playButtonVideo = document.querySelectorAll('.js-btn-play');
const slideVideo = document.querySelectorAll('.videos');

const swiperProgram = new Swiper(sliderProgram, {
  // Optional parameters
  centeredSlides: true,
  spaceBetween: 65,
  slidesPerView: 1.1,

  breakpoints: {
    650: {
      centeredSlides: false,
      slidesPerView: 2.1,
      spaceBetween: 65
    },

    1130: {
      centeredSlides: false,
      slidesPerView: 3.1,
      spaceBetween: 85

    }
  },

  pagination: {
    el: '.program-slider__pagination',
    clickable: true,
  },
});

const swiperVideo = new Swiper(sliderVideo, {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,

  breakpoints: {
    630: {
      spaceBetween: 50,
      slidesPerView: 1.1,
    },
  },

  pagination: {
    el: '.videos-slider__pagination',
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
  let videos = document.querySelectorAll('.js-slide-video video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0
  });

  playButtonVideo.forEach((el) => {
    el.style.display = 'block';
  });
})

body.addEventListener('click', (e) => {
  if (!e.target.closest('.js-slide-video')) {
    let videos = document.querySelectorAll('.js-slide-video video');
    videos.forEach((el) => {
      el.pause();
    });

    playButtonVideo.forEach((el) => {
      el.style.display = 'block';
    });
  }
})