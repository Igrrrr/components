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
  slidesPerView: 2,

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
  autoplay: {
    //пауза между прокруткой
    delay: 1000,
    //закончить на послднем слайде
    stopOnLastSlide: false,
    //отключить после ручного переключения
    disableOnInteraction: true,
  },

  //скорость прокрутки
  speed: 1000,
});
