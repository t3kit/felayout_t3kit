(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {
        // Parallax
        // https://github.com/nk-o/jarallax
        $('.parallax-img').jarallax({
            type: 'scroll', //scroll, scale, opacity, scroll-opacity, scale-opacit
            speed: 0.5,
            noAndroid: false,
            noIos: true
        });
        $('.parallax-video').jarallax({
            type: 'scroll', //scroll, scale, opacity, scroll-opacity, scale-opacit
            speed: 0.5,
            noAndroid: true,
            noIos: true
        });
    });

})(jQuery);
