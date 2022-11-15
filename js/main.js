(function () {

  const navMain = document.querySelector('.page-header');
  const navToggle = document.querySelector('.page-header__toggle');

  if (navMain) {
    navMain.classList.remove('page-header--nojs');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('page-header--closed')) {
        navMain.classList.remove('page-header--closed');
        navMain.classList.add('page-header--opened');
      } else {
        navMain.classList.add('page-header--closed');
        navMain.classList.remove('page-header--opened');
      }
    });
  }

  // accordion

  const accordions = document.querySelector('.accordion');
  const accordionButtons = document.querySelectorAll('.accordion__button');
  const accordionsNojs = document.querySelector('.accordion--nojs');

  if (accordionsNojs) {
    accordionsNojs.classList.remove('accordion--nojs');
  };


  if (accordionButtons) {
    accordionButtons.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        const parent = item.parentNode;
        const activeButton = document.querySelector('.accordion__button--active');
        const button = evt.target;


        if (activeButton) {
          activeButton.classList.remove('accordion__button--active');
        }
        button.classList.toggle('accordion__button--active');

        if (parent.classList.contains('accordion--active')) {
          parent.classList.remove('accordion--active');
          button.classList.remove('accordion__button--active');
        } else {
          for (let j = 0; j < accordions.length; j++) {
            accordions[j].classList.remove('accordion--active');
          }
          parent.classList.add('accordion--active');
        }
      });
    });
  }

  // filter Button

  const filters = document.querySelector('.filters');
  const filterToggle = document.querySelector('.filters__toggler');

  if (filters) {
    filters.classList.remove('filters--nojs');
  }

  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      if (filters.classList.contains('filters--closed')) {
        filters.classList.remove('filters--closed');
        filters.classList.add('filters--opened');
      } else {
        filters.classList.add('filters--closed');
        filters.classList.remove('filters--opened');
      }
    });
  }

  // Slider Goods

  const photos = [
    "img/large/gold-necklace-large.jpg",
    "img/large/pretty-gold-large.jpg",
    "img/large/womens-necklace-large.jpg"
  ];

  const thumbnails = document.querySelectorAll('.goods__photo-preview');
  const fullPhoto = document.querySelector('.goods__review-full');

  const addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
      fullPhoto.src = photo;
    });
  };

  for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
  }


  // Modal
  const modalLink = document.querySelector('.user-menu__button');
  const feedbackPopup = document.querySelector('.modal-login');
  const modalClose = document.querySelectorAll('.modal__close');
  const userName = document.querySelector('input[data-login-input]');
  const modalForm = document.querySelector('.modal__form');
  const userPassword = document.querySelector('input[data-pas-input]');

  let isStorageSupport = true;
  const storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  const modalOpen = function (btn, modal) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal__show');
      document.body.style.overflow = 'hidden';
    });
  }

  const modalCloses = function (modal) {
    modalClose.forEach(btn => {
      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.remove('modal__show');
        document.body.style.overflow = '';
      });
    });
  };

  const сlosingOnClickBackground = function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        e.preventDefault();
        modal.classList.remove('modal__show');
        document.body.style.overflow = '';
      }
    });
  };

  if (modalLink) {
    modalOpen(modalLink, feedbackPopup);

    if (storage) {
      userName.value = storage;
      userPassword.focus();
    } else {
      userName.focus();
    }
  }

  if (modalClose) {
    modalCloses(feedbackPopup);
  }

  сlosingOnClickBackground(feedbackPopup);

  if (modalForm) {
    modalForm.addEventListener('submit', function (evt) {
      if (!userName.value || !userPhone.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal__error');
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add('modal__error');
      } else {
        if (isStorageSupport) {
          localStorage.setItem('login', userName.value);
        }
      }
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (feedbackPopup.classList.contains('modal__show')) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal__show');
        feedbackPopup.classList.remove('modal__error');
        document.body.style.overflow = '';
      }
    }
  });

  // Modal cart

  const cartLink = document.querySelector(".goods-info__btn");
  const popupCart = document.querySelector(".modal-cart");

  if (cartLink) {
    modalOpen(cartLink, popupCart);
  }

  if (modalClose) {
    modalCloses(popupCart);
  }

  сlosingOnClickBackground(popupCart);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupCart.classList.contains("modal__show")) {
        evt.preventDefault();
        popupCart.classList.remove("modal__show");
      }
    }
  });
})();
