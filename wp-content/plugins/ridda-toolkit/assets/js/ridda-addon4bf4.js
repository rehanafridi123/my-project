; (function ($) {
  "use strict";

  var WidgetDefaultHandler = function ($scope) {

    // ## Video Popup
    if ($scope.find('.video-play').length) {
      $('.video-play').magnificPopup({
        type: 'video',
      });
    }

    // ## Client Logo Carousel
    if ($scope.find('.client-logo-active').length) {
      $('.client-logo-active').slick({
        infinite: true,
        speed: 400,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
      });
    }


    // ## Testimonials Carousel
    if ($scope.find('.testimonials-active').length) {
      $('.testimonials-active').slick({
        infinite: true,
        speed: 400,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    }


    // ## Testimonials Two Carousel
    if ($scope.find('.testimonials-two-active').length) {
      $('.testimonials-two-active').slick({
        infinite: true,
        speed: 400,
        arrows: false,
        dots: true,
        appendDots: '.testimonial-dots',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }



    // ## Testimonials Three Carousel
    if ($scope.find('.testimonials-three-active').length) {
      $('.testimonials-three-active').slick({
        infinite: true,
        speed: 400,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    }


    // ## Project Popup Gallery
    $('.project-item .image').magnificPopup({
      type: 'image',
    });


    // ## Widget Gallery
    $('.widget-gallery .gallery a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });


    // ## Quantity Number js
    $('.quantity-down').on('click', function () {
      var numProduct = Number($(this).next().val());
      if (numProduct > 1) $(this).next().val(numProduct - 1);
    });
    $('.quantity-up').on('click', function () {
      var numProduct = Number($(this).prev().val());
      $(this).prev().val(numProduct + 1);
    });


    /* ## Fact Counter + Text Count - Our Success */
    if ($scope.find('.counter-text-wrap').length) {
      $('.counter-text-wrap').appear(function () {

        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }

      }, {
        accY: 0
      });
    }



    /* ## Circle Progress */

    if ($.fn.circleProgress) {
      // Function to initialize circle progress bars
      function initCircleProgress() {
        $scope.find('.circle-progress').each(function () {
          $('.circle-progress').each(function () {
            var progress = $(this);
            var value = parseFloat(progress.data('percentage')) / 100;

            progress.circleProgress({
              value: value,
              size: 88,
              thickness: 5,
              fill: "#FFD043",
              lineCap: 'round',
              emptyFill: "white",
              startAngle: (-Math.PI / 4) * 2,
              animation: { duration: 2000 },
            }).on("circle-animation-progress", function (event, progressValue) {
              $(this).find("span.counting").html(Math.round(progressValue * progress.data('percentage')) + "<span>%</span>");
            });
          });
        });
      }

      // Trigger circle progress bars when they appear in view
      $('.circle-progress').appear(function () {
        initCircleProgress();
      });
    }


    // ## Hover Content
    $('.hover-item').hover(
      function () {
        $(this).find('.hover-content').slideDown();
      }, function () {
        $(this).find('.hover-content').slideUp();
      }
    );


    // ## Case Study
    $('.case-study-item').hover(function () {
      $('.case-study-item').removeClass('active');
      $(this).addClass('active');
    });


    // ## FAQ Nav
    $('.faq-nav li a').on('click', function () {
      $('.faq-nav li a').removeClass('active');
      $(this).addClass('active');
    });


    // ## Scroll to Top
    if ($scope.find('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1000);

      });
    }


    // ## Nice Select
    $('select').niceSelect();


  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );

  });

  /* ==========================================================================
   When document is loaded, do
========================================================================== */

  $(window).on('load', function () {


    // ## Latest Work
    $('.latest-work-item').click(function () {
      $('.latest-work-item').removeClass('active');
      $(this).addClass('active');
      $('.normal-area').slideDown();
      $(this).find('.normal-area').slideUp();
      $('.active-area').slideUp();
      $(this).find('.active-area').slideDown();
    });

    // ## Latest Work
    $('.latest-work-item .active-area').hide();
    $('.latest-work-item.active .active-area').show();
    $('.latest-work-item .normal-area').show();
    $('.latest-work-item.active .normal-area').hide();


    // ## Preloader
    function handlePreloader() {
      if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
      }
    }
    handlePreloader();

  });

  // ## FAQ Nav Fixed
  if ($('.faq-tab-wrap').length) {
    var faqOffset = $('.faq-tab-wrap').offset().top;
    var footerOffset = $('.for-sticky').offset().top;
  }


  $(window).on('scroll', function () {

    // ## FAQ Nav Fixed
    var sticky = $('.faq-tab-wrap'),
      scroll = $(window).scrollTop();

    if (scroll >= faqOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    if (scroll >= footerOffset) sticky.removeClass('fixed');

  });

  // ## AOS Animation
  window.onload = function () {
    setTimeout(() => {
      AOS.init();
    }, 500); // Adjust delay if needed
  };


  $('.mc-form').on('submit', function (e) {
    e.preventDefault();

    let email = $('.mc-form__input').val();

    $.ajax({
      url: RiddaObject.ajax_url,
      type: 'POST',
      data: {
        action: 'subscribe_user', // WP AJAX action
        email: email
      },
      success: function (response) {
        $('.mc-form__feedback').html(response);
        $('.mc-form__input').val('');
      },
      error: function (error) {
        $('.mc-form__feedback').html(response.error_text);
      }
    });
  });

})(jQuery);