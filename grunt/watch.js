module.exports = {

    // watch process - handlebars templates
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },

    // watch process - less compilation
    lessBootstrap: {
        files: ['<%= dev %>/styles/bootstrap.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:bootstrap']
    },
    lessComponents: {
        files: ['<%= dev %>/styles/components.less'],
        tasks: ['less:components']
    },
    less: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/components.less', '!<%= dev %>/styles/local/{,*/}*.less'],
        tasks: ['less:main', 'postcss']
    },
    lessWithoutAutoPrefixer: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/components.less', '!<%= dev %>/styles/local/{,*/}*.less'],
        tasks: ['less:main']
    },
    lessLocal: {
        files: ['<%= dev %>/styles/local.less', '<%= dev %>/styles/local/{,*/}*.less'],
        tasks: ['less:local']
    },

    // watch process - js import
    jsJquery: {
        files: ['<%= dev %>/js/jquery.js'],
        tasks: 'import:jquery'
    },
    jsBootstrap: {
        files: ['<%= dev %>/js/bootstrap.js'],
        tasks: 'import:bootstrap'
    },
    jsComponents: {
        files: ['<%= dev %>/js/components.js'],
        tasks: 'import:components'
    },
    jsMain: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/jquery.js'],
        tasks: ['import:main']
    },
    jsLocal: {
        files: ['<%= dev %>/js/local.js','<%= dev %>/js/local/{,*/}*.js'],
        tasks: 'import:local'
    },

    // watch process - copy sys files
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

    // watch process - special tasks for SMALL project (local development)
    smallFiles: {
        files: ['<%= dev %>/copyToRoot/{,*/}*.*', '<%= dev %>/fonts/{,*/}*.*', '<%= dev %>/images/{,*/}*.*'],
        tasks: ['newer:copy:smallFiles', 'newer:imagemin:small']
    },
    smallJs: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js'],
        tasks: ['newer:copy:smallJs']
    },
    smallLess: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/local/{,*/}*.less'],
        tasks: ['import:mainLess', 'import:bootstrapLess', 'newer:copy:smallCss']
    },

    // watch process - special tasks for BIG project (local development)
    bigFiles: {
        files: ['<%= dev %>/copyToRoot/{,*/}*.*', '<%= dev %>/fonts/{,*/}*.*', '<%= dev %>/images/{,*/}*.*'],
        tasks: ['newer:copy:bigFiles', 'newer:imagemin:big']
    },
    bigCssJs: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/local/{,*/}*.less'],
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
