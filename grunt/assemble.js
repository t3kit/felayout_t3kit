module.exports = {
    options: {
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
};
