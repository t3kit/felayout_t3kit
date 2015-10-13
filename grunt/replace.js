module.exports = {
    html: {
        src: ['<%= tmp %>/*.html'],
        overwrite: true,
        replacements: [
            {
                from: '<link rel="stylesheet" href="bootstrap.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="components.css">',
                to: ''
            }
        ]
    },
    customizerHead: {
        src: ['<%= temp %>/templates/parts/head.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<link rel="stylesheet" href="bootstrap.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="components.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="main.css">',
                to: ''
            },
            {
                from: '<link rel="stylesheet" href="local.css">',
                to: '{{> customizerHead}}'
            }
        ]
    },
    customizerScript: {
        src: ['<%= temp %>/templates/parts/scripts.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<!-- ======= -->',
                to: '{{> customizerScripts}}'
            }
        ]
    },
    customizerBody: {
        src: ['<%= temp %>/templates/layouts/default.hbs'],
        overwrite: true,
        replacements: [
            {
                from: '<!-- Header partials -->',
                to: '{{> customizerBody}}'
            }
        ]
    }
    // customizerFonts: {
    //     src: ['<%= temp %>/styles/icons/icons.less'],
    //     overwrite: true,
    //     replacements: [
    //         {
    //             from: 'url(\'fonts',
    //             to: 'url(\'../fonts'
    //         }
    //     ]
    // }
};
