/* global less */

var lessvar;
var lessObj = {};
jQuery(function($) {

    $('a, button').on('click', function() {
        return false;
    });

    var $body = $('body');
    var $customizer = $('.js__customizer');
    var $customizerHideBtn = $('.js__customizer__hide-btn');
    var $colorPicker = $('.js__color-picker__val');
    var $customizerFooterBtn = $('.js__customizer__footer-btn');
    var $customizerModal = $('.js__customizer-modal-overlay');
    var $customizerModalInput = $('.js__customizer-modal__text');

    $customizerHideBtn.on('click', function(e) {
        e.preventDefault();
        $customizer .toggleClass('_hide-customizer');
    });

    $colorPicker.spectrum({
        showInput: true,
        preferredFormat: 'hex',
        showPalette: true,
        palette: ['#ffffff'],
        showSelectionPalette: true,
        maxSelectionSize: 12,
        showInitial: true,
        localStorageKey: 'spectrum.customizer'
    });

    $colorPicker.on('move.spectrum', function(e, color) {
        e.preventDefault();
        $(this).css('background-color', color.toHexString());
        lessvar = $(this).data('lessvar');
        lessObj[lessvar] = color.toHexString();
        less.modifyVars(lessObj);
    });

    $('.js__customizer__body-item-label-val').on('change', function(e) {
        e.preventDefault();

        // $(this).css('background-color', color.toHexString());
        lessvar = $(this).data('lessvar');
        lessObj[lessvar] = $(this).val();
        less.modifyVars(lessObj);
    });

    $customizerFooterBtn.on('click', function(e) {
        e.preventDefault();

        $body.toggleClass('_freeze-body');
        // $customizerModal.show();
        var lessObjStr = JSON.stringify(lessObj);
        lessObjStr = lessObjStr.replace(/(-)\w{1}/g, function(v) { return v.toUpperCase(); });
        var mapLessObj = {
            ':': ' = ',
            '{': '',
            '}': '',
            '"': '',
            '-': '',
            ',': '\n',
            '@': 'themes.configuration.colors.'
        };
        lessObjStr = lessObjStr.replace(/({|}|-|:|"|,|@)/gi, function(matched) {
            return mapLessObj[matched];
        });
        $customizerModalInput.val(lessObjStr);

    });

    $customizerModal.on('click', function() {
        $body.toggleClass('_freeze-body');
        return false;
    });

});
