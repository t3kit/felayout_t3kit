/* global Swiper*/
(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {

        // initialize swiper when document ready
        // http://idangero.us/swiper/api/
        var swiper = new Swiper('.js__img-slider', {
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
        // Makes it possible to skip between slider images if they have links, using the tab button
        swiper.container.on('focus', 'a', function(e) {
            //Index of focused slide
            var focusIndex = $(e.target).parents('.swiper-slide').index();
            //Reset scrollLeft set by browser on focus
            swiper.container.scrollLeft(0);

            // IE fix
            setTimeout(function() {
                swiper.container.scrollLeft(0);
            }, 0);

            //Slide to focused slide
            swiper.slideTo(focusIndex);
        });
    });

})(jQuery);
