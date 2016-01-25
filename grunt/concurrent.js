module.exports = {
    options: {
        limit: 17
    },

    // Copy files and compile templates. Default task.
    devProcess: {
        tasks: [
            'copy:fonts',
            'copy:images',
            'copy:flags',
            'copy:toRoot',
            'assemble:allTemplates',
            'less:bootstrap',
            'less:components',
            'less:main',
            'less:local',
            'import:jquery',
            'import:bootstrap',
            'import:components',
            'import:main',
            'import:local'
        ],
    },
    // Copy files and minify images. Static site task.
    siteProcess: {
        tasks: [
            'copy:siteFiles',
            'imagemin:site'
        ],
    },

    // Copy files. Small project task.
    smallProcess: {
        tasks: [
            'copy:smallFiles',
            'copy:smallJs',
            'copy:smallCss',
            'import:bootstrapLess',
            'import:mainLess',
            'imagemin:small',
            'copy:gitIgnoreSmall'
        ],
    },

    // Copy files and minify images. BIG project task.
    bigProcess: {
        tasks: [
            'copy:bigFiles',
            'copy:bigCssJs',
            'imagemin:big',
            'copy:gitIgnoreBig'
        ]
    },
};
