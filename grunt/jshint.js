module.exports = {
    options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
    },
    mainJs: {
        src: ['<%= dev %>/js/main/**/*.js']
    },
    gruntConfigFiles: {
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};
