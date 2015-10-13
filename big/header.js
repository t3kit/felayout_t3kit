// header
// =================================
// Global variables (jshint):

    /*global touchSupport */
// =================================

jQuery(function($) {
    // Caching variables
    var $html = $('html');
    var $body = $('body');
    var $headerTop = $('.header-top');
    var $mainNavigation = $('.js__main-navigation');
    var $openSubMenuLink = $('.js__main-navigation__open-sub-menu-link');
    var $navigationItemsWrp = $mainNavigation.find('.js__navigation__items-wrp');
    var $mainNavigationItemsList = $mainNavigation.find('.js__main-navigation__items-list').children('li');





    // Bootstrap Hover Dropdown plugin. Execute  dropdown on no-touch screen > 992px.
    // if (!touchSupport && $(window).width() > 992) {
    //     $mainNavigation.find('.js__main-navigation__item-link').dropdownHover({ screenSize:992, delay:300 });
    // }

    // Freaze "body" when menu opens using "mobile-menu-collapsed". Aligning scroll bar on desktop.
    // var mainNavSmallScreen = function mainNavSmallScreen() {
    //     if ($(window).width() < 992) {
    //         var bodyWidth = $body.width();
    //         $navigationItemsWrp.on('show.bs.collapse', function() {
    //             $html.addClass('mobile-menu-collapsed');
    //             if (!touchSupport) {
    //                 var menuWidth = $body.width();
    //                 var bodyWidthFull = menuWidth - bodyWidth;
    //                 $headerTop.css({
    //                     'padding-right': bodyWidthFull
    //                 });
    //             }
    //         });
    //         $navigationItemsWrp.on('hide.bs.collapse', function() {
    //             $html.removeClass('mobile-menu-collapsed');
    //             if (!touchSupport) {
    //                 $headerTop.css({
    //                     'padding-right': 0
    //                 });
    //             }
    //         });
    //     }
    // };

    // Cleanup function to clean unneeded classes
    var cleanup = function cleanup() {
        $mainNavigationItemsList.removeClass('_open-mobile-dropdown');
        $mainNavigationItemsList.removeClass('open');
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

    // mainNavSmallScreen();

    $(window).on('orientationchange',function() {
        // mainNavSmallScreen();
        cleanup();
        console.log('dfdsfs');
    });

    // Navigation toggle button active class
    // $('.js__pxa-nav-toggle-button').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // });




    var mobileMenuAnimationComplete = true;
    $('.js__main-navigation__toggle-btn').on('click', function(e) {
        e.preventDefault();
        if (mobileMenuAnimationComplete) {
            mobileMenuAnimationComplete = false;
            // $(this).toggleClass('_open');
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
    // var $body = $('body');

    // var $mainNavigation = $('.js__main-navigation');
    // var $mainNavigationWrp = $mainNavigation.find('.js__main-navigation-min__items-wrp');
    // var $mainNavigationItem = $mainNavigation.find('.js__main-navigation-min__item');
    // var $mainNavigationMobileLink = $mainNavigation.find('.js__main-navigation-min__item-link-mobile');
    // var mobileNavBackdrop = '.mobile-nav-backdrop';
    var $mainNavigationSearchBtn = $('.js__main-navigation__search-btn');
    var $mainNavigationSearchBox = $('.js__main-navigation__search-box');
    var $mainNavigationSearchBoxOverlay = $('.js__main-navigation__search-box-overlay');

    var $languageMenuOverlay = $('.js__header-top__language-menu-overlay');
    var $languageMenuBtn = $('.js__header-top__language-menu-btn');
    var $languageMenuBox = $('.js__header-top__language-menu-box');
    var $languageMenuBoxCloseBtn = $('.js__header-top__language-menu-box-close-btn');

    // var $header = $('.js__header');
    // var $headerInfo = $('.js__header-info').outerHeight();

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

