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
  autoHeight: true,

  //slides on page
  slidesPerView: 3,
});
