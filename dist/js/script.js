'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // const popupTimeout = setTimeout(openPopup, 30000, 'popupTimer');

  var isOpenPopup = false;
  var main = document.getElementById('main');
  // main.addEventListener('click', function(e) {
  //     const target = e.target;
  //     console.log(target);
  //
  //     if(isOpenPopup) {
  //         closePopup();
  //     }
  // })

  var overlays = document.querySelectorAll(".overlay");
  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      var target = e.target;
      console.log(target);
      if (target.closest(".overlay") && target !== overlay) return;
      closePopup(overlay.id);
    });
  });
  function openPopup(id) {
    // clearTimeout(popupTimeout);
    if (isOpenPopup) {
      closePopup();
      return;
    }
    console.log('ok');
    var popup = document.getElementById(id);
    popup.classList.add("active");
    main.classList.add('blur');
    isOpenPopup = true;
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    main.classList.remove('blur');
    document.querySelectorAll(".overlay").forEach(function (popup) {
      return popup.classList.remove('active');
    });
    isOpenPopup = false;
    document.body.removeAttribute('style');
  }
  function validate(form) {
    var fields;
    try {
      fields = form.querySelectorAll(".required-field");
    } catch (e) {
      console.log('err');
      return true;
    }
    var arr = [];
    console.log(fields);
    fields.forEach(function (field) {
      if (!field.value || field.value === "") {
        field.classList.add("invalid");
        arr.push(false);
        return;
      }
      field.classList.remove("invalid");
      arr.push(true);
    });
    if (arr.find(function (el) {
      return el === false;
    }) === false) return false;
    console.log('ookkk');
    return true;
  }
  document.body.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      closePopup('popupTimer');
      closePopup('popupBasic');
    }
  });
  var buttons = document.querySelectorAll(".open-basic-popup");
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPopup('popupBasic');
    });
  });
  try {
    var _buttons = document.querySelectorAll(".open-signup-popup");
    _buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupSignup');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons2 = document.querySelectorAll(".open-tarifst-popup");
    _buttons2.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifStandard');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons3 = document.querySelectorAll(".open-tarifpro-popup");
    _buttons3.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifPro');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons4 = document.querySelectorAll(".open-tarifpremium-popup");
    _buttons4.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifPremium');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons5 = document.querySelectorAll(".open-corpclient-popup");
    _buttons5.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupCorpClient');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var cookiePlate = document.getElementById("cookie-plate");
    var cookieBtn = document.getElementById("cookieBtn");
    cookieBtn.addEventListener("click", function () {
      cookiePlate.remove();
    });
  } catch (e) {
    console.log(e);
  }

  // const basicForm = document.getElementById('basicForm');
  var forms = document.querySelectorAll('.form-submit');
  console.log(forms);
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!validate(form)) {
        e.preventDefault();
        return;
      }
      console.log('ok');
    });
  });
  try {
    var _buttons6 = document.querySelectorAll(".open-timer-popup");
    _buttons6.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTimer');
      });
    });
  } catch (e) {
    console.log(e);
  }

  //
  // const timerForm = document.getElementById("timerForm");
  //
  //
  // timerForm.addEventListener("submit", function (e) {
  //     console.log('as')
  //     if (!validate(timerForm)) {
  //         e.preventDefault();
  //         return;
  //     }
  //     console.log('ok')
  // })

  var closePopupButtons = document.querySelectorAll(".popup__close");
  closePopupButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.closest(".overlay");
      closePopup(parent.id);
    });
  });
  try {
    var blocks = document.querySelectorAll('.lessons__lesson__topics__list');
    var toggles = document.querySelectorAll('.lessons__lesson__topics__toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var parent = toggle.closest('.lessons__lesson__body__topics');
        var block = parent.querySelector(".lessons__lesson__topics__list");
        if (toggle.innerText === 'Свернуть список') {
          toggle.innerText = 'Показать все темы урока';
        } else {
          toggle.innerText = 'Свернуть список';
        }
        block.classList.toggle("active");
      });
    });
  } catch (e) {
    console.log(e);
  }

  //
  // try {
  //     const wrapper = document.querySelector('.marquee-wrapper'),
  //         marquee = document.querySelector('.marquee'),
  //         wrapperWidth = wrapper.offsetWidth,
  //         marqueeWidth = marquee.scrollWidth;
  //
  //     let interval;
  //
  //     document.querySelector('button').onclick = function() {
  //         clearInterval(interval)
  //     }
  //
  //     document.querySelectorAll('.marquee span').forEach(function(el) {
  //         el.addEventListener("mouseover", function () {
  //             clearInterval(interval);
  //         });
  //
  //         el.addEventListener("mouseout", function () {
  //             interval = setInterval(move, 10);
  //         });
  //     })
  //
  //     function move() {
  //         let currentTX = getComputedStyle(marquee).transform.split(',');
  //         if( currentTX[4] === undefined ) {
  //             currentTX = -1;
  //         } else {
  //             currentTX = parseFloat(currentTX[4]) - 1;
  //         }
  //
  //         if(-currentTX >= marqueeWidth) {
  //             marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  //
  //         } else {
  //             marquee.style.transform = 'translateX(' + currentTX + 'px)';
  //         }
  //     }
  //
  //     interval = setInterval(move, 10);
  // } catch(e) {
  //     console.log(e);
  // }

  try {
    var swiper = new Swiper('.teachers .swiper', {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1'
      },
      pagination: false,
      breakpoints: {
        500: {
          slidesPerView: 3
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _swiper = new Swiper('.reviews .swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        500: {
          slidesPerView: 3
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var btn = document.getElementById('instrument-btn');
    var block = document.getElementById('instrument-more-content');
    btn.addEventListener("click", function () {
      block.classList.add("active");
      btn.style.display = 'none';
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn = document.querySelector(".program__show-btn");
    var hiddens = document.querySelectorAll(".program__module-hidden");
    _btn.addEventListener("click", function () {
      hiddens.forEach(function (elem) {
        elem.classList.add('active');
      });
      _btn.style.display = 'none';
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var dots = document.querySelectorAll(".graphic-dot-1");
    var plates = document.querySelectorAll('.demand__graphic__plate-1');
    dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _dots = document.querySelectorAll(".graphic-dot-2");
    var _plates = document.querySelectorAll('.demand__graphic__plate-2');
    _dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons7 = document.querySelectorAll(".faq__buttons button");
    var elems = document.querySelectorAll(".faq__text p");
    _buttons7.forEach(function (btn) {
      btn.addEventListener("click", function () {
        _buttons7.forEach(function (btn2) {
          return btn2.classList.remove('active');
        });
        elems.forEach(function (el) {
          el.classList.remove('active');
          if (btn.dataset.id === el.dataset.id) {
            el.classList.add('active');
            btn.classList.add('active');
          }
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
});