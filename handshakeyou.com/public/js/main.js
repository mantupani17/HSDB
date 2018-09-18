(function($) {
    "use strict";

    // meanmenu
    $('#gd-mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.gd-mobile-menu-active'
    });

    //Header Style and Scroll Menu
    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 120) {
            $('.gd-header').addClass('gd-active-sticky');
        } else {
            $('.gd-header').removeClass('gd-active-sticky');
        };

        // Activate menu
        if (wScroll > 120) {
            $('.top-contact-items');
            $('.top-contact-items').fadeOut('slow');
        } else {
            $('.top-contact-items');
            $('.top-contact-items').fadeIn('slow');
        };

        if (wScroll > 120) {
            $('.gd-skillbar').each(function() {
                $(this).find('.gd-skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 4000);
            });
        }

    });

    // Owl Slider
    var gd_slider_active = $('.gd-slider-active');
    gd_slider_active.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navElement: 'div',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1
            }
        }
    });

    // Owl Products, Trainers, Classes
    var gd_sl_active = $('.gd-sl-active');
    gd_sl_active.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navElement: 'div',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    //Owl Event
    var gd_events_active = $('.gd-events-active');
    gd_events_active.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        navElement: 'div',
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Owl Gallery
    var gd_gallery_active = $('.gd-gallery-active');
    gd_gallery_active.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navElement: 'div',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Owl Testimonials
    var gd_testimonials_active = $('.gd-testimonial-active');
    gd_testimonials_active.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navElement: 'div',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // Counter JS
    $('.gd-counter h1').counterUp({
        delay: 10,
        time: 1000
    });

    // Magnific Popup JS
    $('.gd-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //Window load function
    $(window).on('load', function() {

        $('#preloader').fadeOut('slow', function() {

            $(this).remove();

        });

    });


})(jQuery);