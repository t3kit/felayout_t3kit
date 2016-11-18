module.exports = {
    options: {
        jshintrc: './node_modules/developer_resources/felayout/.jshintrc',
        reporter: require('jshint-stylish')
    },
    mainJs: {
        src: ['<%= dev %>/js/main/**/*.js']
    },
    gruntConfigFiles: {
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};
