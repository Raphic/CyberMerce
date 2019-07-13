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
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
        ,
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
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
        ,
        1200: {
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