// =================================
// Global variables (jshint):

    /*global touchSupport*/
// =================================

jQuery(function($) {
    // Caching variables
    var $html = $('html');
    var $mainNavigation = $('.js__main-navigation');
    var $openSubMenuLink = $('.js__main-navigation__open-sub-menu-link');
    var $mainNavigationItemsList = $mainNavigation.find('.js__main-navigation__items-list').children('li');

    // Cleanup function to clean unneeded classes
    var cleanup = function cleanup() {
        if ($mainNavigationItemsList.hasClass('_open-mobile-dropdown')) {
            $mainNavigationItemsList.removeClass('_open-mobile-dropdown');
        }
        if ($mainNavigationItemsList.hasClass('_open-tablet-dropdown')) {
            $mainNavigationItemsList.removeClass('_open-tablet-dropdown');
        }
        if ($html.hasClass('mobile-menu-opened')) {
            $html.removeClass('mobile-menu-opened');
        }
        if ($(window).width() < 992 && !$html.hasClass('mobile-menu-opened')) {
            $('.js__navigation__items-wrp').hide();
        } else {
            $('.js__navigation__items-wrp').show();

        }
    };

    // Add click event to dropdown link on mobile devices.
    $openSubMenuLink.on('click', function(e) {
        e.preventDefault();
        // if (touchSupport && $(window).width() > 992) {
        if ($(window).width() > 992) {
            $mainNavigationItemsList.not($(this).parent()).removeClass('_open-tablet-dropdown');
            $(this).parent('.main-navigation__item').toggleClass('_open-tablet-dropdown');
        }
        if ($(window).width() < 992) {
            $(this).parent('.main-navigation__item').toggleClass('_open-mobile-dropdown');
        }
    });

    $(window).on('orientationchange',function() {
        cleanup();
    });

    var mobileMenuAnimationComplete = true;
    $('.js__main-navigation__toggle-btn').on('click', function(e) {
        e.preventDefault();
        if (mobileMenuAnimationComplete) {
            mobileMenuAnimationComplete = false;
            $html.toggleClass('mobile-menu-opened');
        }
        $('.js__navigation__items-wrp').not(':animated').slideToggle(300, function() {
            mobileMenuAnimationComplete = true;
        });
    });

});

// ====== class fo fixed main navigation bar   =======
jQuery(function($) {
    var navbar = $('.js__main-navigation');
    var offsetTop = navbar.offset().top;
    $(window).on('orientationchange',function() {
        if ($(window).width() > 992 && touchSupport) {
            var navbarPos = navbar.css('position');
            offsetTop = $('header').height() - (navbarPos === 'fixed' ? 0 : navbar.outerHeight());
        }
    });
    $(window).on('load scroll', function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > offsetTop) {
            $('body:not(.main-navigation-fixed)').addClass('main-navigation-fixed');
        } else {
            $('body.main-navigation-fixed').removeClass('main-navigation-fixed');
        }
    });
});

jQuery(function($) {
    var $mainNavigationSearchBtn = $('.js__main-navigation__search-btn');
    var $mainNavigationSearchBox = $('.js__main-navigation__search-box');
    var $mainNavigationSearchBoxOverlay = $('.js__main-navigation__search-box-overlay');

    var $languageMenuOverlay = $('.js__header-top__language-menu-overlay');
    var $languageMenuBtn = $('.js__header-top__language-menu-btn');
    var $languageMenuBox = $('.js__header-top__language-menu-box');
    var $languageMenuBoxCloseBtn = $('.js__header-top__language-menu-box-close-btn');

    $mainNavigationSearchBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('_search-close-btn');
        $mainNavigationSearchBox.toggleClass('_search-box-visible');
        if ($mainNavigationSearchBox.hasClass('_search-box-visible')) {
            $mainNavigationSearchBox.find('input[type="search"]').focus();
        }
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
    });
    $languageMenuOverlay.on('click', function() {
        $(this).toggleClass('_language-menu-box-overlay-visible');
        $languageMenuBox.removeClass('_language-menu-box-visible');
    });
    $languageMenuBoxCloseBtn.on('click', function() {
        $languageMenuOverlay.toggleClass('_language-menu-box-overlay-visible');
        $languageMenuBox.removeClass('_language-menu-box-visible');
    });

});
