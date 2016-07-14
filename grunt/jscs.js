module.exports = {
    options: {
        config: '.jscsrc',
        // force: true
    },
    mainJs: {
        src: ['<%= dev %>/js/main/**/*.js']
    },
    gruntConfigFiles: {
        src: ['grunt/*.js', 'Gruntfile.js']
    }
};
