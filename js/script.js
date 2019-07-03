var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
//    autoplay: {
//        delay: 5000,
//        disableOnInteraction: false,
//    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});