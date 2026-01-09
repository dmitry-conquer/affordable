export default class Sliders {
  constructor() {
    this.offers();
  }

  private offers() {
    const offersBlock = document.getElementById("offers-slider");
    if (!offersBlock) return;
    // @ts-expect-error Swiper is loaded from CDN
    new Swiper(offersBlock, {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      speed: 1100,
      simulateTouch: false,

      pagination: {
        el: ".offers__pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".offers__nav-button--next",
        prevEl: ".offers__nav-button--prev",
      },
    });
  }
}
