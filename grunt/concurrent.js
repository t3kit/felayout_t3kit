module.exports = {
    options: {
        limit: 15
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

    siteProcess: {
        tasks: [
            'copy:site',
            'imagemin:site'
        ],
    },
    smallProcess: {
        tasks: [
            'copy:smallFiles',
            'copy:smallJs',
            'copy:smallCss',
            'import:bootstrapLess',
            'import:mainLess',
            'imagemin:small'
        ],
    },
    bigProcess: {
        tasks: [
            'copy:bigFiles',
            'copy:bigCssJs',
            'imagemin:big'
        ]
    },
};
