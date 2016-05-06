(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {

        // Parallax
        // http://markdalgleish.com/projects/stellar.js
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });

})(jQuery);
