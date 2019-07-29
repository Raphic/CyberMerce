$(document).ready(function () {
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

    var swiper = new Swiper('.doubleSlider .swiper-container', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
//        autoplay: {
//            delay: 6000,
//            disableOnInteraction: false,
//        },
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

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
    });
    wow.init();
    
    
    //Mobile menu
    let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');
    
    burger.addEventListener('click', function(e){
        this.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
    /* Onload demo - dirty timeout */
    let clickEvent = new Event('click');
});
