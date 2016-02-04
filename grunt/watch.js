// file sets for Grunt Watch process

// css/less
var lessBootstrapFiles = ['<%= dev %>/styles/bootstrap.less', '<%= dev %>/styles/customVariables.less'];
var cssComponentsFiles = ['<%= dev %>/styles/components.less'];
var mainLessFiles = ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/components.less', '!<%= dev %>/styles/local/{,*/}*.less'];
var lessLocalFiles = ['<%= dev %>/styles/local.less', '<%= dev %>/styles/local/{,*/}*.less'];

// js
var jsJqueryFiles = ['<%= dev %>/js/jquery.js'];
var jsBootstrapFiles = ['<%= dev %>/js/bootstrap.js'];
var jsComponentsFiles = ['<%= dev %>/js/components.js'];
var jsMainFiles = ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/jquery.js'];
var jsLocalFiles = ['<%= dev %>/js/local.js','<%= dev %>/js/local/{,*/}*.js'];

// other files
var fontsFiles = '<%= dev %>/fonts/{,*/}*.*';
var imagesFiles = '<%= dev %>/images/{,*/}*.*';
var copyToRootFiles = '<%= dev %>/copyToRoot/{,*/}*.*';

module.exports = {
    // ============================================================
    // DEFAULT
    // ============================================================
    // watch process - handlebars templates
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:allTemplates']
    },

    // watch process - less compilation
    lessBootstrap: {
        files: lessBootstrapFiles,
        tasks: ['less:bootstrap']
    },
    lessComponents: {
        files: cssComponentsFiles,
        tasks: ['less:components']
    },
    less: {
        files: mainLessFiles,
        tasks: ['less:main', 'postcss']
    },
    lessLocal: {
        files: lessLocalFiles,
        tasks: ['less:local']
    },

    // watch process - js import
    jsJquery: {
        files: jsJqueryFiles,
        tasks: 'import:jquery'
    },
    jsBootstrap: {
        files: jsBootstrapFiles,
        tasks: 'import:bootstrap'
    },
    jsComponents: {
        files: jsComponentsFiles,
        tasks: 'import:components'
    },
    jsMain: {
        files: jsMainFiles,
        tasks: ['import:main']
    },
    jsLocal: {
        files: jsLocalFiles,
        tasks: 'import:local'
    },

    // watch process - copy sys files
    copyFonts: {
        files: fontsFiles,
        tasks: 'newer:copy:fonts'
    },
    copyImages: {
        files: imagesFiles,
        tasks: 'newer:copy:images'
    },
    copyToRoot: {
        files: copyToRootFiles,
        tasks: 'newer:copy:toRoot'
    },
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^END^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // ============================================================
    // SMALL PROJECT
    // Special tasks for SMALL project (local development)
    // ============================================================
    //Small watch process - less compilation
    smallLessBootstrap: {
        files: lessBootstrapFiles,
        tasks: ['less:bootstrap', 'import:bootstrapLess']
    },
    smallLessComponents: {
        files: cssComponentsFiles,
        tasks: ['less:components', 'newer:copy:smallCss']
    },
    smallLess: {
        files: mainLessFiles,
        tasks: ['less:main', 'import:mainLess']
    },

    //Small watch process - copy files for Small project
    smallCopyFonts: {
        files: fontsFiles,
        tasks: ['newer:copy:fonts', 'newer:copy:smallFiles']
    },
    smallCopyImages: {
        files: imagesFiles,
        tasks: ['newer:copy:images', 'newer:imagemin:small']
    },
    smallCopyToRoot: {
        files: copyToRootFiles,
        tasks: ['newer:copy:toRoot', 'newer:copy:smallFiles']
    },

    //Small watch process - js import
    smallJsJquery: {
        files: jsJqueryFiles,
        tasks: ['import:jquery', 'newer:copy:smallJs']
    },
    smallJsBootstrap: {
        files: jsBootstrapFiles,
        tasks: ['import:bootstrap', 'newer:copy:smallJs']
    },
    smallJsComponents: {
        files: jsComponentsFiles,
        tasks: ['import:components', 'newer:copy:smallJs']
    },
    smallJsMain: {
        files: jsMainFiles,
        tasks: ['import:main', 'newer:copy:smallJs']
    },
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^END^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // ============================================================
    // BIG PROJECT
    // Special tasks for BIG project (local development)
    // ============================================================
    //BIG watch process - less compilation
    bigLessBootstrap: {
        files: lessBootstrapFiles,
        tasks: ['less:bootstrap', 'newer:copy:bigCssJs']
    },
    bigLessComponents: {
        files: cssComponentsFiles,
        tasks: ['less:components', 'newer:copy:bigCssJs']
    },
    bigLess: {
        files: mainLessFiles,
        tasks: ['less:main', 'postcss', 'newer:copy:bigCssJs']
    },

    // BIG watch process - js import
    bigJsJquery: {
        files: jsJqueryFiles,
        tasks: ['import:jquery', 'newer:copy:bigCssJs']
    },
    bigJsBootstrap: {
        files: jsBootstrapFiles,
        tasks: ['import:bootstrap', 'newer:copy:bigCssJs']
    },
    bigJsComponents: {
        files: jsComponentsFiles,
        tasks: ['import:components', 'newer:copy:bigCssJs']
    },
    bigJsMain: {
        files: jsMainFiles,
        tasks: ['import:main', 'newer:copy:bigCssJs']
    },

    //BIG watch process - copy files for Small project
    bigCopyFonts: {
        files: fontsFiles,
        tasks: ['newer:copy:fonts', 'newer:copy:bigFiles']
    },
    bigCopyImages: {
        files: imagesFiles,
        tasks: ['newer:copy:images', 'newer:imagemin:big']
    },
    bigCopyToRoot: {
        files: copyToRootFiles,
        tasks: ['newer:copy:toRoot', 'newer:copy:bigFiles']
    },
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^END^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
