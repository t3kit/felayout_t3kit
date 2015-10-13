module.exports = {
    site: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= site %>',
        src: [
            '*.js',
            '*.css',
            '*.html',
            '*.{ico,png,txt,xml,svg}',
            'flags/{,*/}*.*',
            'fonts/{,*/}*.*'
        ]
    },
    small: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= small %>',
        src: [
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt',
            'flags/{,*/}*.*',
            'fonts/{,*/}*.*'
        ]
    },
    smallJs: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= small %>',
        src: [
            '*.js',
            '!local.js'
        ]
    },
    smallCss: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= small %>',
        src: [
            'components.css',
        ]
    },
    big: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= big %>',
        src: [
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt',
            'fonts/{,*/}*.*',
            'flags/{,*/}*.*'
        ]
    },
    bigCssJs: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= big %>',
        src: [
            '*.js',
            '!local.js',
            '*.css',
            '!local.css'
        ]
    },
    fonts: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'fonts/{,*/}*.*'
        ]
    },
    images: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'images/{,*/}*.*'
        ]
    },
    toRoot: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/copyToRoot',
        dest: '<%= temp %>',
        src: [
            '{,*/}*.*'
        ]
    },
    flags: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/flag-icon-css/flags/4x3/',
        dest: '<%= temp %>/flags/4x3/',
        src: [
            'be.svg',
            'dk.svg',
            'ee.svg',
            'fl.svg',
            'fr.svg',
            'fi.svg',
            'de.svg',
            'it.svg',
            'nl.svg',
            'nz.svg',
            'no.svg',
            'pl.svg',
            'pt.svg',
            'es.svg',
            'se.svg',
            'ch.svg',
            'gb.svg',
            'us.svg'
        ]
    },
    // customizerBase: {
    //     expand: true,
    //     dot: true,
    //     cwd: '<%= dev %>',
    //     dest: '<%= temp %>',
    //     src: [
    //         'templates/parts/**',
    //         'templates/layouts/{,*/}*.*',
    //         'styles/customVariables.less'
    //     ]
    // },
    // customizerHelper: {
    //     expand: true,
    //     dot: true,
    //     cwd: 'grunt/helpers',
    //     dest: '<%= temp %>/templates/parts',
    //     src: [
    //         'customizer/{,*/}*.*'
    //     ]
    // },
    // customizerComponents: {
    //     expand: true,
    //     dot: true,
    //     cwd: '<%= dev %>',
    //     dest: '<%= temp %>',
    //     src: [
    //         'bower_components/**'
    //     ]
    // }
    // customizerComponents: {
    //     expand: true,
    //     dot: true,
    //     cwd: '<%= dev %>',
    //     dest: '<%= temp %>',
    //     src: [
    //         'bower_components/less/dist/less.min.js',
    //         'bower_components/spectrum/spectrum.css',
    //         'bower_components/spectrum/spectrum.js'
    //     ]
    // }
};
