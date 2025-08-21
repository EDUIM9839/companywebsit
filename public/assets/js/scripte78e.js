/*-----------------------------------------------------------------------------------
    Template Name: Tekprof - IT Services & Technology HTML Template
    Template URI: https://webtend.net/demo/html/tekprof/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	JS INDEX
	===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Menu Hidden Sidebar
    ## Search Box
    ## Video Popup
    ## Video Popup With Text
    ## Main Slider
    ## Client Logo Slider
    ## Testimonial Slider
    ## Testimonial Two Slider
    ## Testimonial Three Slider
    ## Testimonial Four
    ## Testimonial Five
    ## Marquee Right Slider
    ## Marquee Left Slider
    ## Working Process Two Slider
    ## Blog Three Slider
    ## Team Slider
    ## Service Four Slider
    ## Hover Content
    ## Fact Counter
    ## Circle Progress
    ## Circle Progress Team
    ## Circle Progress Achievement
    ## Case Filter
    ## Price Range Fliter
    ## SkillBar
    ## Scroll to Top
    ## Nice Select
    ## AOS Animation
    ## Preloader
    
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
         
        // ## Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // ## Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
  
        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        // ## Video Popup With Text
        if ($('.video-play-text').length) {
            $('.video-play-text').magnificPopup({
                type: 'video',
            });
        }
        
        // ## Main Slider
        if ($('.main-slider-active').length) {
            $('.main-slider-active').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: true,
                prevArrow: '<button class="prev-arrow"><i class="fal fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fal fa-angle-right"></i></button>',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        
        // ## Client Logo Slider
        if ($('.client-logo-active').length) {
            $('.client-logo-active').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: false,
                dots: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
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
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        }
        
        // ## Testimonial Slider
        if ($('.testimonials-active').length) {
            $('.testimonials-active').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: true,
                dots: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                prevArrow: '.testi-arrow-left',
                nextArrow: '.testi-arrow-right',
                responsive: [
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
        
        // ## Testimonial Two Slider
        if ($('.testimonials-two-active').length) {
            $('.testimonials-two-active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: true,
                dots: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                prevArrow: '.testi-arrow-left',
                nextArrow: '.testi-arrow-right'
            });
        }
        
        // ## Testimonial Three Slider
        if ($('.testimonials-three-active').length) {
            $('.testimonials-three-active').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                arrows: true,
                dots: false,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                prevArrow: '.testi-arrow-left',
                nextArrow: '.testi-arrow-right'
            });
        }
        
        
        // ## Testimonials Four Carousel
        if ($('.testimonials-four-active').length) {
            $('.testimonials-four-active').slick({
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
        
        
        // ## Testimonial Five
        if ($('.testimonial-five-slider').length) {
            $('.testimonial-five-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
            });
        }
        
                
        // ## Marquee Right Slider
        if ($('.marquee-slider-right').length) {
            $('.marquee-slider-right').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
            });
        }
         
        
        // ## Marquee Left Slider
        if ($('.marquee-slider-left').length) {
            $('.marquee-slider-left').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: -1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: true,
                rtl: true,
            });
        }
         
        

        // ## Working Process Two Slider
        const $wsSlider = $(".working-process-two-active");
        $wsSlider
            .on('init', () => {
                mouseWheel($wsSlider)
            })
            .slick({
                dots: false,
                vertical: true,
                arrows: false,
                infinite: false,
                slidesToShow: 3
            })
        function mouseWheel($wsSlider) {
            $(window).on('wheel', { $wsSlider: $wsSlider }, mouseWheelHandler)
        }
        function mouseWheelHandler(event) {
            event.preventDefault()
            const $wsSlider = event.data.$wsSlider
            const delta = event.originalEvent.deltaY
            if(delta > 0) {
                $wsSlider.slick('slickNext')
            }
            else {
                $wsSlider.slick('slickPrev')
            }
        }


        // ## Blog Three Slider
        const $blogSlider = $(".blog-three-active");
        $blogSlider
            .on('init', () => {
                mouseWheel($blogSlider)
            })
            .slick({
                dots: false,
                vertical: true,
                arrows: false,
                infinite: false,
                slidesToShow: 2
            })
        function mouseWheel($blogSlider) {
            $(window).on('wheel', { $blogSlider: $blogSlider }, mouseWheelHandler)
        }
        function mouseWheelHandler(event) {
            event.preventDefault()
            const $blogSlider = event.data.$blogSlider
            const delta = event.originalEvent.deltaY
            if(delta > 0) {
                $blogSlider.slick('slickNext')
            }
            else {
                $blogSlider.slick('slickPrev')
            }
        }
        
        
        // ## Team Slider
        if ($('.team-slider').length) {
            $('.team-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
        
        
        // ## Service Four Slider
        if ($('.service-four-slider').length) {
            $('.service-four-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                speed: 400,
                arrows: false,
                dots: true,
                focusOnSelect: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        // ## Service Image Popup Gallery
        $('.service-item-four .image .plus').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // Service Item Four Ative
        $(".service-item-four").hover(function(){
            $(".service-item-four").removeClass("active");
            $(this).addClass("active");
        });
        
        
        
        // ## Hover Content
        $('.hover-content').hover(
            function(){
                $(this).find('.inner-content').slideDown();
            }, function() {
                $(this).find('.inner-content').slideUp();
            }
        );
        
        
         /* ## Fact Counter + Text Count - Our Success */
        if ($('.counter-text-wrap').length) {
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
            var progressOne = $('.circle-progress.one')
            if($.fn.circleProgress) {
              progressOne.appear(function () {
                progressOne.circleProgress({
                    value: 0.89,
                    size: 120,
                    thickness: 1,
                    fill: "#002FF5",
                    // lineCap: 'round',
                    emptyFill: "transparent",
                    startAngle: Math.PI / 4 * 1,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(89 * progress) + '<span>%</span>');
                  });
              });
            };
        };
        if ($.fn.circleProgress) {
            var progressTwo = $('.circle-progress.two')
            if($.fn.circleProgress) {
              progressTwo.appear(function () {
                progressTwo.circleProgress({
                    value: 0.89,
                    size: 120,
                    thickness: 1,
                    fill: "#002FF5",
                    // lineCap: 'round',
                    emptyFill: "transparent",
                    startAngle: Math.PI / 4 * 1,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(5 * progress) + '<span>k+</span>');
                  });
              });
            };
        };
        

        /* ## Circle Progress Team */
        if ($.fn.circleProgress) {
            var progressTeamOne = $('.circle-progress-two.one')
            if($.fn.circleProgress) {
              progressTeamOne.appear(function () {
                progressTeamOne.circleProgress({
                    value: 0.85,
                    size: 100,
                    thickness: 5,
                    fill: "#FC5546",
                    lineCap: 'round',
                    emptyFill: "transparent",
                    startAngle: Math.PI / 4 * 1,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(85 * progress) + '<span>%</span>');
                  });
              });
            };
        };
        if ($.fn.circleProgress) {
            var progressTeamTwo = $('.circle-progress-two.two')
            if($.fn.circleProgress) {
              progressTeamTwo.appear(function () {
                progressTeamTwo.circleProgress({
                    value: 0.79,
                    size: 100,
                    thickness: 5,
                    fill: "#FC5546",
                    lineCap: 'round',
                    emptyFill: "transparent",
                    startAngle: Math.PI / 4 * 1,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(79 * progress) + '<span>%</span>');
                  });
              });
            };
        };
        

        /* ## Circle Progress Achievement */
        if ($.fn.circleProgress) {
            var progressAchieveOne = $('.circle-progress-achievement.one')
            if($.fn.circleProgress) {
              progressAchieveOne.appear(function () {
                progressAchieveOne.circleProgress({
                    value: 0.84,
                    size: 65,
                    thickness: 5,
                    fill: "white",
                    lineCap: 'round',
                    emptyFill: "rgba(255, 255, 255, .2)",
                    startAngle: Math.PI / 4 * 1,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(65 * progress) + '<span>+</span>');
                  });
              });
            };
        };
        if ($.fn.circleProgress) {
            var progressAchieveTwo = $('.circle-progress-achievement.two')
            if($.fn.circleProgress) {
              progressAchieveTwo.appear(function () {
                progressAchieveTwo.circleProgress({
                    value: 0.75,
                    size: 65,
                    thickness: 5,
                    fill: "white",
                    lineCap: 'round',
                    emptyFill: "rgba(255, 255, 255, .2)",
                    startAngle: Math.PI / 4 * 2,
                    animation : { duration: 2000},
                  }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('.counting').html(Math.round(4.8 * progress));
                  });
              });
            };
        };
        
        
        // ## Case Filter
       $('.case-active').imagesLoaded(function () {
			var items = $('.case-active').isotope({
				itemSelector: '.item',
				percentPosition: true,
			});
			// items on button click
			$('.case-nav').on('click', 'li', function () {
				var filterValue = $(this).attr('data-filter');
				items.isotope({
					filter: filterValue
				});
			});
			// menu active class
			$('.case-nav li').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		});
        
        
        // ## Price Range Fliter jQuery UI
        if ($('.price-slider-range').length) {
            $(".price-slider-range").slider({
                range: true,
                min: 5,
                max: 100,
                values: [10, 65],
                slide: function (event, ui) {
                    $("#price").val("$ " + ui.values[0] + " - $ " + ui.values[1]);
                }
            });
            $("#price").val("$ " + $(".price-slider-range").slider("values", 0) +
                " - $ " + $(".price-slider-range").slider("values", 1));
        }
        
        
         // ## SkillBar
       if ($('.skillbar').length) {
           $('.skillbar').appear(function () {
               $('.skillbar').skillBars({
                   from: 0,
                   speed: 4000,
                   interval: 100,
               });
           });
       }
        
        
        
        // ## Latest Work
        $('.latest-work-item').click(function(){
            $('.latest-work-item').removeClass('active');
            $(this).addClass('active');
            $('.normal-area').slideDown();
            $(this).find('.normal-area').slideUp();
            $('.active-area').slideUp();
            $(this).find('.active-area').slideDown();
        });
                
        
        
        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
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
        
        
        // ## AOS Animation
        AOS.init();
        
 
    });
    
    
    /* ==========================================================================
       When document is resize, do
    ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
    ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
    ========================================================================== */

    $(window).on('load', function () {
        
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
        
        
        // ## AOS Animation
        AOS.init();
        
        
    });

})(window.jQuery);
