const swiper = new Swiper('.promo__slider', {
    slidesPerView: 2,
    spaceBetween: 30, 
    loop: true,
    navigation: {
        nextEl: '.promo__slider-arrow',
    },
});