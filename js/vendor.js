import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

// Swiper

(function () {

  const swiper = new Swiper('.swiper-main', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span>of
              <span class="${totalClass}"></span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
    },
  });

})();
