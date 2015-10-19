// header
// @import 'main/header/header.js';
// @import 'main/header/headerMin.js';

// elements
jQuery(function($) {
    $('.js__img-slider').swiper({
        nextButton: '.js__img-slider__btn-next',
        prevButton: '.js__img-slider__btn-prev',
        pagination: '.js__img-slider__pagination',
        paginationClickable: true,
        preloadImages: false,
        // loop: true,
        // autoplay: 2500,
        lazyLoading: true,
        watchSlidesVisibility: true,
        lazyLoadingInPrevNext: true,
        speed: 800,
        onLazyImageReady: function() {
            $('.js__img-slider__caption-p').dotdotdot();
        }
    });
});

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



// ########## general.js ###########

// ^^^^^^^^^^ general.js ^^^^^^^^^^^

