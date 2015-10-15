// header
// =================================
// Global variables (jshint):

    /*global touchSupport */
// =================================

jQuery(function($) {
    var $body = $('body');

    var $mainNavigation = $('.js__main-navigation-min');
    var $mainNavigationWrp = $mainNavigation.find('.js__main-navigation-min__items-wrp');
    var $mainNavigationItem = $mainNavigation.find('.js__main-navigation-min__item');
    var $mainNavigationMobileLink = $mainNavigation.find('.js__main-navigation-min__item-link-mobile');
    var mobileNavBackdrop = '.mobile-nav-backdrop';
    var $mainNavigationSearchBtn = $mainNavigation.find('.js__main-navigation-min__search-btn');
    var $mainNavigationSearchBox = $mainNavigation.find('.js__main-navigation-min__search-box');
    var $mainNavigationSearchBoxOverlay = $('.js__main-navigation-min__search-box-overlay');

    var $languageMenuOverlay = $('.js__header-info__language-menu-overlay');
    var $languageMenuBtn = $('.js__header-info__language-menu-btn');
    var $languageMenuBox = $('.js__header-info__language-menu-box');
    var $languageMenuBoxCloseBtn = $('.js__header-info__language-menu-box-close-btn');

    var $header = $('.js__header');
    var $headerInfo = $('.js__header-info').outerHeight();
    if ($(window).width() <= 1024) {
        $mainNavigationWrp.swiper({
            spaceBetween: 5,
            slidesPerView: 'auto',
            nextButton: '.js__main-navigation-min-button-next',
            prevButton: '.js__main-navigation-min-button-prev',
            slideClass: 'js__main-navigation-min__item',
            wrapperClass: 'js__main-navigation-min__items-list'
        });
    }
    if (touchSupport) {
        $mainNavigationMobileLink.on('click', function(e) {
            e.preventDefault();
            $(mobileNavBackdrop).remove();
            $mainNavigationItem.not($(this).parent()).removeClass('_open');
            $(this).parent().toggleClass('_open');
            $(document.createElement('div')).addClass('mobile-nav-backdrop').insertAfter($header).on('click', function() {
                $mainNavigationMobileLink.parent('._open').toggleClass('_open');
                $(mobileNavBackdrop).remove();
            });
        });
    }
    $mainNavigationSearchBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('_search-close-btn');
        $mainNavigationSearchBox.toggleClass('_search-box-visible');
        $mainNavigationSearchBoxOverlay.toggleClass('_search-box-overlay-visible');
    });
    $mainNavigationSearchBoxOverlay.on('click', function() {
        $(this).toggleClass('_search-box-overlay-visible');
        $mainNavigationSearchBtn.toggleClass('_search-close-btn');
        $mainNavigationSearchBox.toggleClass('_search-box-visible');
    });

    $languageMenuBtn.on('click', function(e) {
        e.preventDefault();
        $languageMenuBox.addClass('_language-menu-box-visible');
        $languageMenuOverlay.toggleClass('_language-menu-box-overlay-visible');
        // $body.toggleClass('_freeze-body');
    });
    $languageMenuOverlay.on('click', function() {
        $(this).toggleClass('_language-menu-box-overlay-visible');
        $languageMenuBox.removeClass('_language-menu-box-visible');
        // $body.toggleClass('_freeze-body');
    });
    $languageMenuBoxCloseBtn.on('click', function() {
        $languageMenuOverlay.toggleClass('_language-menu-box-overlay-visible');
        $languageMenuBox.removeClass('_language-menu-box-visible');
        // $body.toggleClass('_freeze-body');
    });

    var firstTime = true;
    var didScroll = true;
    $(window).scroll(function() {
        if (didScroll) {
            didScroll = false;
            setTimeout(function() {
                if ($(this).scrollTop() > $headerInfo && firstTime) {
                    firstTime = false;
                    didScroll = true;
                    return;
                }
                if ($(this).scrollTop() > $headerInfo) {
                    $header.addClass('_hide-info');
                } else {
                    $header.removeClass('_hide-info');
                }
                didScroll = true;
            }, 250);
        }
    });

});

