module.exports = {
    options: {
        config: './node_modules/developer_resources/felayout/.jscsrc'
    },
    mainJs: {
        src: ['<%= dev %>/js/main/**/*.js']
    },
    gruntConfigFiles: {
        src: ['grunt/*.js', 'Gruntfile.js']
    }
};
