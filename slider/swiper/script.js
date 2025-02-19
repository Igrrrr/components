new Swiper(".image-slider", {
  //Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevtEl: ".swiper-button-prev",
  },
  //Navigation,
  //Bullets
  pagination: {
    el: ".swiper-pagination",
    // // Bullets
    // clickable: true,
    // //Dynamic
    // dynamicBullets: true,
    // //Custom
    // renderBullet: function (index, className) {
    //   return '<span class=" ' + className + ' ">' + (index + 1) + "</span>";
    // },

    //Fraction
    type: "fraction",
    //custom
    renderFraction: function (currentClass, totalClass) {
      return (
        'Фото <span class=" ' +
        currentClass +
        ' "></span>' +
        " из " +
        '<span class=" ' +
        totalClass +
        ' "></span>'
      );
    },
    //   //Progressbar
    //   type: "progressbar",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  //click to slide
  slideToClickedSlide: true,

  //keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  //mouse control
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider",
  },

  //autoheight
  autoHeight: false,

  //slides on page
  //slidesPerView: 3,

  //gap
  spaceBetween: 30,

  //кол-во пролистываемых слайдов
  slidesPerGroup: 1,

  //Активный слайд по центру
  //centeredSlides: true,

  //стартовый слайд
  //initialSlide: 2,

  //мультирядность
  slidesPerColumn: 1,

  //бесконечный слайдер
  loop: true,

  //кол-во дублирующих слайдов
  loopSlides: 0,

  //свободный режим
  freeMode: false,

  //автопрокрутка
  // autoplay: {
  //   //пауза между прокруткой
  //   delay: 1000,
  //   //закончить на послднем слайде
  //   stopOnLastSlide: false,
  //   //отключить после ручного переключения
  //   disableOnInteraction: true,
  // },

  //скорость прокрутки
  speed: 1000,

  //вертикальный слайдер
  //direction: "horizontal",

  //эффекты переключения слайдов
  // листание
  //effect: "slide",

  // //смена прозрачности
  // effect: "fade",
  // // дополнение к fade
  // fadeEffect: {
  //   //параллельная смена прозрачности
  //   crossFade: true,
  // },

  // //переворот
  // effect: "flip",
  // //дополнение к flip
  // flipEffect: {
  //   //тень
  //   slideShadows: true,
  //   //показ только активного слайда
  //   limitRotation: true,
  // },

  // //куб
  // effect: "cube",
  // //дополнение к cube
  // cubeEffect: {
  //   //настройка тени
  //   slideShadows: true,
  //   shadow: true,
  //   shadowEffect: 20,
  //   shadowScale: 0.94,
  // },

  // //поток
  // effect: "coverflow",
  // //дополнение к coverflow
  // coverFlowEffect: {
  //   //угол
  //   rotate: 20,
  //   //наложение
  //   stretch: 50,
  //   //тень
  //   slideShadow: true,
  // },

  //адаптив
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // },
  //соотношение сторон
  breakpoints: {
    "@0.75": {
      slidesPerView: 1,
    },
    "@1.00": {
      slidesPerView: 2,
    },
    "@1.50": {
      slidesPerView: 3,
    },
  },
});
