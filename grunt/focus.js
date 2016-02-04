module.exports = {
    default: {
        include: ['html', 'lessBootstrap', 'lessComponents', 'less', 'lessLocal', 'jsJquery', 'jsBootstrap', 'jsComponents', 'jsMain', 'jsLocal', 'copyFonts', 'copyImages', 'copyToRoot', 'livereload']
    },
    small: {
        include: ['html', 'lessLocal', 'jsLocal', 'smallLessBootstrap', 'smallLessComponents', 'smallLess', 'smallCopyFonts', 'smallCopyImages', 'smallCopyToRoot', 'smallJsJquery', 'smallJsBootstrap', 'smallJsComponents', 'smallJsMain', 'livereload']
    },
    big: {
        include: ['html', 'lessLocal', 'jsLocal', 'bigLessBootstrap', 'bigLessComponents', 'bigLess', 'bigJsJquery', 'bigJsBootstrap', 'bigJsComponents', 'bigJsMain', 'bigCopyFonts', 'bigCopyImages', 'bigCopyToRoot', 'livereload']
    },
};
