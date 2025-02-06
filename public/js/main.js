$(window).load(function () {
  $(".bg-loader").fadeOut();
}),
  $(document).ready(function () {
    $("input[name='phone']").mask("+7 (999) 999-99-99"),
      $(".wpcf7-form input, .wpcf7-form textarea, input, textarea").each(
        function () {
          var o = $(this).attr("placeholder");
          $(this).focus(function () {
            $(this).removeAttr("placeholder");
          }),
            $(this).focusout(function () {
              $(this).attr("placeholder", o);
            });
        }
      ),
      $(".clickBuyButton").click(function () {
        var o = $(this).data("title");
        $("#window-buy").find(".hide-product > input").val(o);
      }),
      $(window).scroll(function () {
        1500 < $(this).scrollTop()
          ? $("#scroller").fadeIn(300)
          : $("#scroller").fadeOut(300);
      }),
      $("#scroller").click(function () {
        return $("body,html").animate({ scrollTop: 0 }, 300), !1;
      }),
      jcf.replaceAll(),
      $(".home-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: ".item",
        autoplay: !0,
        autoplaySpeed: 4e3,
        infinite: !0,
        centerMode: !1,
        prevArrow: $(".home-slider .arrow-prev"),
        nextArrow: $(".home-slider .arrow-next"),
      }),
      $(".text-wrap table").wrap("<div class='scroll_table'></div>"),
      $(".btn-menu ,.nav-menu .close").on("click", function () {
        $(".nav-menu").toggleClass("show"), $("body").toggleClass("ovh");
      }),
      $("#menu-menu .menu-item-has-children").hover(
        function () {
          $(this).find(".sub-menu").stop().slideDown();
        },
        function () {
          $(this).find(".sub-menu").stop().slideUp();
        }
      ),
      $(".modal-window .wpcf7-form .item-btn").on("click", function () {
        setTimeout(function () {
          $(".modal-window").hasClass("sent") &&
            $(".modal-window .popup-title").text("Благодарим!");
        }, 700);
      });
    var e = 1;
    function o() {
      $(".clickBuyButton").on("click", function () {
        $("#window-buy .wpcf7-mail-sent-ok").hide(),
          $("#window-buy").removeClass("sent").show();
      });
    }
    $("footer .item").each(function (o) {
      $(this).addClass("box" + e + " "), e++;
    }),
      $(window).width() < 767 &&
        480 < $(window).width() &&
        $(".form-item").insertBefore(".box2"),
      $(".search-btn").on("click", function () {
        $(".search-popup")
          .addClass("show")
          .css("display", "table")
          .animate({ top: 0 }, 600),
          $("body").addClass("hid");
      }),
      $(".search-popup .close").on("click", function () {
        $(".search-popup")
          .removeClass("show")
          .animate({ top: "-100%" }, 600)
          .hide(900),
          $("body").removeClass("hid");
      }),
      $(".callback").on("click", function () {
        $("#window-callback").show();
      }),
      o(),
      $(document).ajaxComplete(function () {
        o();
      }),
      $(".popup .close,.modal-window").on("click", function () {
        $("#window-buy, #window-callback").hide();
      }),
      $(".popup").on("click", function (o) {
        o.stopPropagation();
      }),
      $(".goods-slider .goods-list").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        centerMode: !1,
        responsive: [
          {
            breakpoint: 1199,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 639, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".product-slider .slider-for").slick({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        centerPadding: "0",
        dots: !1,
        infinite: !0,
        fade: !0,
        asNavFor: ".product-slider .slider-nav",
      }),
      $(".product-slider .slider-nav").slick({
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "0",
        dots: !1,
        infinite: !0,
        centerMode: !0,
        focusOnSelect: !0,
        asNavFor: ".product-slider .slider-for",
        responsive: [
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".diplom-list,.clients-list").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        centerMode: !1,
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 1023,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 376, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".reviews-list").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: !1,
        infinite: !0,
        centerMode: !1,
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 1023,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 376, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
      $(".btn-filter,.catalog-content .sidebar .close").on(
        "click ",
        function () {
          $(".catalog-content .sidebar").toggleClass("show");
        }
      ),
      959 < $(window).width() &&
        $(window).scroll(function () {
          540 < $(document).scrollTop()
            ? $("#header").addClass("fixed")
            : $("#header").removeClass("fixed");
        }),
      $("ul").each(function () {
        "none" !== $(this).css("list-style-type") &&
          $(this).addClass("no-style");
      });
  });