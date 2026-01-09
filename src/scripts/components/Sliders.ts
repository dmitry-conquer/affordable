export default class Sliders {
  constructor() {
    this.offers();
  }

  private offers() {
    const offersBlock = document.getElementById("offers-slider");
    if (!offersBlock) return;
    // @ts-expect-error Swiper is loaded from CDN
    new Swiper(offersBlock, {
      loop: true,
      centeredSlides: true,
      speed: 1100,
      simulateTouch: false,
      spaceBetween: 24,

      pagination: {
        el: ".offers__pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".offers__nav-button--next",
        prevEl: ".offers__nav-button--prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },

        700: {
          slidesPerView: 1.4,
        },

        850: {
          slidesPerView: 1.7,
        },

        1100: {
          slidesPerView: 2.1,
        },
        1400: {
          slidesPerView: 2.5,
        },
        1600: {
          slidesPerView: 2.8,
        },
        1800: {
          slidesPerView: 3.6,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    });
  }
}
