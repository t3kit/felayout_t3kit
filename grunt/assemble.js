module.exports = {
    options: {
        postprocess: require('pretty'),
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= dev %>/templates/layouts',
        helpers: 'grunt/helpers/helper-*.js',
        partials: ['<%= dev %>/templates/parts/**/*.hbs']
    },
    allTemplates: {
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    },
    customizer: {
        options: {
            layoutdir: '<%= temp %>/templates/layouts',
            partials: ['<%= temp %>/templates/parts/**/*.hbs']
        },
        files: {
            '<%= temp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    }
};
