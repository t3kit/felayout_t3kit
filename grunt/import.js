module.exports = {
    jquery: {
        src: '<%= dev %>/js/jquery.js',
        dest: '<%= temp %>/jquery.js',
    },
    main: {
        src: '<%= dev %>/js/main.js',
        dest: '<%= temp %>/main.js',
    },
    header: {
        src: '<%= dev %>/js/header.js',
        dest: '<%= temp %>/header.js',
    },
    headerMin: {
        src: '<%= dev %>/js/headerMin.js',
        dest: '<%= temp %>/headerMin.js',
    },
    bootstrap: {
        src: '<%= dev %>/js/bootstrap.js',
        dest: '<%= temp %>/bootstrap.js',
    },
    local: {
        src: '<%= dev %>/js/local.js',
        dest: '<%= temp %>/local.js',
    },
    components: {
        src: '<%= dev %>/js/components.js',
        dest: '<%= temp %>/components.js',
    },
    mainLess: {
        src: '<%= dev %>/styles/main.less',
        dest: '<%= small %>/main.less',
    },
    bootstrapLess: {
        src: '<%= dev %>/styles/bootstrap.less',
        dest: '<%= small %>/bootstrap.less',
    },
    headerLess: {
        src: '<%= dev %>/styles/header.less',
        dest: '<%= small %>/header.less',
    },
    headerMinLess: {
        src: '<%= dev %>/styles/headerMin.less',
        dest: '<%= small %>/headerMin.less',
    },
    localLess: {
        src: '<%= dev %>/styles/local.less',
        dest: '<%= small %>/local.less',
    }
};
