module.exports = {
    options: {
        csslintrc: '.csslintrc'
    },
    lint: {
        options: {
            import: false
        },
        src: ['<%= temp %>/main.css', '<%= temp %>/header.css', '<%= temp %>/headerMin.css']
    }
};
