module.exports = {
    options: {
        ignore: [
            /\.open/,
            /\.next/,
            /\.prev/,
            /\.left/,
            /\.right/,
            /\.fade/,
            /\.collapse/,
            /\.collapsing/,
        ],
        htmlroot: '<%= tmp %>',
        ignoreSheets: [/fonts.googleapis/]
    },
    dist: {
        src: '<%= tmp %>/*.html',
        dest: '<%= tmp %>/bootstrap.css'
    }
};
