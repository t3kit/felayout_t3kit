jQuery(function($) {
    $('.js__logo-carousel').swiper({
        nextButton: '.js__logo-carousel__btn-next',
        prevButton: '.js__logo-carousel__btn-prev',
        preloadImages: false,
        lazyLoading: true,
        watchSlidesVisibility: true,
        lazyLoadingInPrevNext: true,
        slidesPerView: 'auto',
        autoplay: 2500
    });
});
