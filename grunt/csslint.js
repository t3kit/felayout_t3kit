module.exports = {
    options: {
        csslintrc: './node_modules/developer_resources/felayout/.csslintrc'
    },
    lint: {
        options: {
            import: false
        },
        src: ['<%= temp %>/main.css']
    }
};
