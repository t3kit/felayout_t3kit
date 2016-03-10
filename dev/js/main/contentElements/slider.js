(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {

        // initialize swiper when document ready
        // http://idangero.us/swiper/api/
        $('.js__img-slider').swiper({
            nextButton: '.js__img-slider__btn-next',
            prevButton: '.js__img-slider__btn-prev',
            pagination: '.js__img-slider__pagination',
            paginationClickable: true,
            preloadImages: false,
            lazyLoading: true,
            watchSlidesVisibility: true,
            lazyLoadingInPrevNext: true,
            speed: 600
        });
    });

})(jQuery);
