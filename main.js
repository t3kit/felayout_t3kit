
// header
// =================================
// Global variables (jshint):

    /*global*/
// =================================

jQuery(function($) {
    // Caching variables
    var $html = $('html');
    var $mainNavigation = $('.js__main-navigation');
    var $openSubMenuLink = $('.js__main-navigation__open-sub-menu-link');
    var $mainNavigationItemsList = $mainNavigation.find('.js__main-navigation__items-list').children('li');

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


/*global tx_solr_suggestUrl*/
/*global Awesomplete*/
/*global touchSupport*/

// global var
// container for Search suggestion data
var mainSearchInputList = {};

(function($) {
    'use strict';

    // init function
    var searchSuggestFn = function() {

        // ============================
        // Search Suggest DATA-API
        // ============================
        $('[data-search="searchSuggest"]').each(function(index, el) {
            mainSearchInputList['searchItem' + index] = new Awesomplete(el, {
                list: [],
                maxItems: 20,
                minChars: 2,
                autoFirst: true
            });
            var req = false;
            $(this).on('keyup.search.suggest', function(e) {
                var c = e.keyCode;
                if (c === 13 ||c === 27 || c === 38 || c === 40) {
                    return;
                }
                var that = $(this);
                var fetchSuggestData = function() {
                    if (!req) {
                        req = true;
                        $.ajax({
                            url: tx_solr_suggestUrl, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
                            dataType: 'json',
                            data:{
                                termLowercase: that.val().toLowerCase(),
                                termOriginal: that.val(),
                                L: jQuery('div.tx-solr input[name="L"]').val()
                            },
                            success: function(data) {
                                req = false;
                                var arrr = [];
                                $.each(data, function(term) {
                                    arrr.push(term);
                                });
                                mainSearchInputList['searchItem' + index]._list = arrr;
                                mainSearchInputList['searchItem' + index].evaluate();
                            }
                        });
                    }
                };
                typeof tx_solr_suggestUrl !== 'undefined' && fetchSuggestData(); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
            });
            $(this).on('awesomplete-selectcomplete', function() {
                $(this).closest('form').submit();
            });
        });
        // =============end==============

    };

    // document load event
    $(document).ready(function() {
        if (!touchSupport && $(window).width() >= 992) {
            searchSuggestFn();
        }
    });

})(jQuery);


// ########## general.js ###########

// ^^^^^^^^^^ general.js ^^^^^^^^^^^

