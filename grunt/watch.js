module.exports = {
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },
    less: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/components.less', '!<%= dev %>/styles/header.less', '!<%= dev %>/styles/headerMin.less'],
        tasks: ['less:main']
    },
    lessBootstrap: {
        files: ['<%= dev %>/styles/bootstrap.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:bootstrap']
    },
    lessComponents: {
        files: ['<%= dev %>/styles/components.less'],
        tasks: ['less:components']
    },
    lessHeader: {
        files: ['<%= dev %>/styles/header.less', '<%= dev %>/styles/header/{,*/}*.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:header']
    },
    lessHeaderMin: {
        files: ['<%= dev %>/styles/headerMin.less', '<%= dev %>/styles/header/{,*/}*.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:headerMin']
    },
    lessLocal: {
        files: ['<%= dev %>/styles/local.less', '<%= dev %>/styles/local/{,*/}*.less'],
        tasks: ['less:local']
    },
    jsMain: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/jquery.js', '!<%= dev %>/js/header.js', '!<%= dev %>/js/headerMin.js'],
        tasks: ['import:main', 'jshint:mainJs', 'jscs:mainJs']
    },
    jsLocal: {
        files: ['<%= dev %>/js/local.js','<%= dev %>/js/local/{,*/}*.js'],
        tasks: 'import:local'
    },
    jsComponents: {
        files: ['<%= dev %>/js/components.js'],
        tasks: 'import:components'
    },
    jsBootstrap: {
        files: ['<%= dev %>/js/bootstrap.js'],
        tasks: 'import:bootstrap'
    },
    jsJquery: {
        files: ['<%= dev %>/js/jquery.js'],
        tasks: 'import:jquery'
    },
    jsHeader: {
        files: ['<%= dev %>/js/main/header/header.js', '<%= dev %>/js/header.js'],
        tasks: ['import:header', 'jshint:mainJs', 'jscs:mainJs']
    },
    jsHeaderMin: {
        files: ['<%= dev %>/js/main/header/headerMin.js', '<%= dev %>/js/headerMin.js'],
        tasks: ['import:headerMin', 'jshint:mainJs', 'jscs:mainJs']
    },
    copyFonts: {
        files: '<%= dev %>/fonts/{,*/}*.*',
        tasks: 'newer:copy:fonts'
    },
    copyImages: {
        files: '<%= dev %>/images/{,*/}*.*',
        tasks: 'newer:copy:images'
    },
    copyToRoot: {
        files: '<%= dev %>/copyToRoot/{,*/}*.*',
        tasks: 'newer:copy:toRoot'
    },

    small: {
        files: ['<%= dev %>/copyToRoot/{,*/}*.*', '<%= dev %>/fonts/{,*/}*.*', '<%= dev %>/images/{,*/}*.*'],
        tasks: ['newer:copy:small', 'newer:imagemin:small']
    },
    smallJs: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js'],
        tasks: ['newer:copy:smallJs']
    },
    smallLess: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/local.less'],
        tasks: ['import:mainLess', 'import:bootstrapLess', 'import:headerLess', 'import:headerMinLess', 'newer:copy:smallCss']
    },

    big: {
        files: ['<%= dev %>/copyToRoot/{,*/}*.*', '<%= dev %>/fonts/{,*/}*.*', '<%= dev %>/images/{,*/}*.*'],
        tasks: ['newer:copy:big', 'newer:imagemin:big']
    },
    bigCssJs: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/local.less'],
        tasks: ['newer:copy:bigCssJs']
    },

    livereload: {
        options: {
            interrupt: true,
            livereload: 35729
        },
        files: [
            '<%= temp %>/*.html',
            '<%= temp %>/*.css',
            '<%= temp %>/*.js',
            '<%= temp %>/images/{,*/}*.*',
            '<%= temp %>/fonts/{,*/}*.*',
            '<%= temp %>/*.{ico,png,txt,xml}'
        ]
    }

};
