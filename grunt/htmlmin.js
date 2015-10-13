module.exports = {
    site: {
        options: {
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeCommentsFromCDATA: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true
        },
        expand: true,
        cwd: '<%= tmp %>',
        src: ['*.html'],
        dest: '<%= site %>'
    }
};
