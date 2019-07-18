$(document).ready(function () {
    //___ Main slider on top - swiper slider _______________
    var swiper = new Swiper('.slider-main .swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
//            320: {
//                slidesPerView: 1,
//                spaceBetween: 10
//            },
//            480: {
//                slidesPerView: 2,
//                spaceBetween: 20
//            },
//            640: {
//                slidesPerView: 3,
//                spaceBetween: 30
//            }
//            ,
            1200: {
                spaceBetween: 20
            }
        }
    });
    //___ Double slider bottom - swiper slider _______________
    var swiper = new Swiper('.doubleSlider .swiper-container', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1350: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            }
        }
    });
    
    //___ Animation wow _______________
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
    });
    wow.init();
    
    
    //___ Mobile menu _______________
    let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');
    
    burger.addEventListener('click', function(e){
        this.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
    /* Onload demo - dirty timeout */
    let clickEvent = new Event('click');
    
    //___ Counter Numbers _______________
    /* Check position Box inViewScreen */
    var counterBox = $('.valueSolution');
    var winHeight = $(window).height();
    if (counterBox.length) {
        var status = false,
            positionBox = $('.valueSolution').offset().top;
            //when shows at bottom
            var viewInBottom = positionBox - winHeight;
        $(window).on('scroll', function() {
            var currentPosition = $(document).scrollTop();
            //when position starting in viewport
            if (currentPosition > viewInBottom && status === false) {
            status = true;
            count();
            }   
        });
    }
    //counter function will animate by using external js also add seprator "."
    function count(){
        $('.valueCount').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
//                complete: function() {
//                    console.log("ok");
//                }
            });
        });
    }
//    $('.valueSolution').isInViewport(function (status) {
//        if (status === 'entered') {
//            console.log('inview');
//            count();
//        }
//        if (status === 'leaved') {
//            $('.valueCount').stop();
//        }
//    });
//    $('.valueCount').each(function () {
//        if ($('.valueSolution .wow').is(":visible")) {
//            console.log("ok");
//            $(this).prop('Counter',0).animate({
//                Counter: $(this).text()
//            }, 
//            {
//                duration: 4000,
//                delay: 5000,
//                easing: 'swing',
//                step: function (now) {
//                    $(this).text(Math.ceil(now));
//                }
//            });
//        };
//    })
    
});


