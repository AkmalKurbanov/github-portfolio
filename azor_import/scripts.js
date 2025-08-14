$(document).ready(function () {
  var swiper = new Swiper(".hero-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    }
  });
  var swiper = new Swiper(".providers-slider", {
    slidesPerView: 10,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      "0": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "350": {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      "450": {
        slidesPerView: 5,
        spaceBetween: 20,
      },

      "767": {
        slidesPerView: 7,
        spaceBetween: 40,
      },
      "991": {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      "1199": {
        slidesPerView: 10,
        spaceBetween: 60,
      }
    }
  });



  var $element = $('.counts__item');
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      counter = 1;
    }
  });

  $('.select').on('click', function () {
    $(this).find('.select__dropdown').toggle();
    $('.select').not(this).find('.select__dropdown').hide();
  });

  $('.select__option').on('click', function () {
    var val = $(this).attr('data-value');
    $(this).parent().parent().find('.select__input').val(val);
    $(this).parent().parent().find('.select__selected').html(val);
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".select");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.select__dropdown').hide();
      }
    });
  });


  var map;

  DG.then(function () {
    map = DG.map('map', {
      center: [42.881090, 74.582186],
      zoom: 13
    });

    DG.marker([42.881090, 74.582186]).addTo(map).bindPopup('г. Бишкек, ул. Уметалиева 127');
  });



  $(document).on('click', '[data-scroll]', function (e) {
    e.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top - 59
    }, 700);
  });


  $('.feedback-js').on('click', function () {
    $('#email').focus();
  });

  var headerHeight = $('.header').outerHeight();

  $(window).scroll(function () {
    var stickyHeight = $('.header').outerHeight();
    var sticky = $('.header'),
      scroll = $(window).scrollTop();

    if (scroll >= stickyHeight) {
      sticky.addClass('fixed');
      setTimeout(function () {
        sticky.addClass('open');
      }, 500);
      $('.hero').css('margin-top', headerHeight);
    } else {
      sticky.removeClass('fixed open');
      $('.hero').css('margin-top', 0);
    }
  });

  $('.header__nav').clone().appendTo('.menu');
  $('.hamburger').on('click', function () {
    $('.menu').addClass('--open');
    $('body').addClass('layer');
  });

  $('.menu__close, .menu li a').on('click', function () {
    $('.menu').removeClass('--open');
    $('body').removeClass('layer');
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".menu");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.removeClass('--open');
        $('body').removeClass('layer');
      }
    });
  });



  $('.title span:not(".title-paraphernalia")').each(function () {
    var distance = $(this).offset().left;
    $(this).parents('.title-wrap').find('.subtitle').css('margin-left', distance - 15);
  });

  $(window).resize(function () {
    $('.title span:not(".title-paraphernalia")').each(function () {
      var distance = $(this).offset().left - 15;
      $(this).parents('.title-wrap').find('.subtitle').css('margin-left', distance);
    });
  });



  if (window.matchMedia("(max-width: 1199px)").matches) {
    $('.advantages__col:last-child .advantages__link-wrap').appendTo('.advantages__col:first-child .advantages__links-wrap');
    $('.advantages__col:first-child .advantages__item').appendTo('.advantages__col:last-child');
    $('.advantages__col:last-child .advantages__links-wrap').remove();
    $('footer .social').appendTo('.footer__top .footer__col:last-child');


  } else {

  }

});