module.exports = {
    options: {
        limit: 20
    },
    devProcess: {
        tasks: [
            'copy:fonts',
            'copy:images',
            'copy:flags',
            'copy:toRoot',
            'assemble:allTemplates',
            'less:header',
            'less:headerMin',
            'less:main',
            'less:bootstrap',
            'less:components',
            'less:local',
            'import:header',
            'import:headerMin',
            'import:main',
            'import:jquery',
            'import:bootstrap',
            'import:components',
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
            'copy:small',
            'copy:smallJs',
            'copy:smallCss',
            'import:mainLess',
            'import:bootstrapLess',
            'import:headerLess',
            'import:headerMinLess',
            'imagemin:small'
        ],
    },
    bigProcess: {
        tasks: [
            'copy:big',
            'copy:bigCssJs',
            'imagemin:big'
        ]
    },
    // big: {
    //     tasks: [
    //         'copy:big',
    //         'copy:faviconsMetaTagsBig',
    //         'imagemin:big'
    //     ]
    // },
    // site: {
    //     tasks: [
    //         'copy:site',
    //         // 'replace'
    //     ]
    // },
    // customizer: {
    //     tasks: [
    //         'copy:fonts',
    //         'copy:images',
    //         'copy:flags',
    //         'copy:toRoot',
    //         'assemble:customizer',
    //         'import:main',
    //         'import:jquery',
    //         'import:bootstrap',
    //         'import:components',
    //         'import:local'
    //     ],
    // },
};
