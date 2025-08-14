"use strict";
$(document).ready(function () {
  function e(e) {
    e.preventDefault();
    var t = $($(this).attr("href"));
    $("html, body").animate({
      scrollTop: t.offset().top
    }, 700)
  }

  $(".hamburger").click(function () {
    $(this).toggleClass("openClose"), $(".mnu-js").toggleClass("mobileMnu-js"), $(".hamburger__line").toggleClass("lineBg")
  }), $(".mnu-js").click(function () {
    $(this).removeClass("mobileMnu-js"), $(".hamburger").removeClass("openClose"), $(".hamburger__line").removeClass("lineBg")
  }), $("[data-scroll]").on("click", e), $(".count-js").each(function () {
    $(this).prop("Counter", 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4e3,
      easing: "swing",
      step: function (e) {
        $(this).text(Math.ceil(e))
      }
    })
  });
  var t = new Swiper(".thumbs", {
    slidesPerView: 6,
    touchRatio: 0
  });
  new Swiper(".comment", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: !1
    },
    thumbs: {
      swiper: t
    }
  });
  $("form").submit(function () {
    var e = $(this);
    return $.ajax({
      type: "POST",
      url: "mail.php",
      data: e.serialize()
    }).done(function () {
      $.fancybox.open('<div class="message"><h2>Спасибо!</h2><p>Бриф успешно отправлен.</p><p>Мы свяжемся с Вами в ближайшее время!</p></div>')
    }), !1
  })
});