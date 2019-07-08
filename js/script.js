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
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
});
wow.init();