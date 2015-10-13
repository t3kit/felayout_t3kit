module.exports = {
    options: {
        commit: true,
        push: true,
        remote: '<%= remoteRepo %>',
        message: 'update'
    },
    site: {
        options: {
            dir: '<%= site %>',
            branch: '<%= remoteBranch %>'
        }
    },
    // site: {
    //     options: {
    //         dir: '<%= site %>',
    //         branch: 'site'
    //     }
    // },
    // big: {
    //     options: {
    //         dir: '<%= big %>',
    //         branch: 'big'
    //     }
    // },
    // customizerSite: {
    //     options: {
    //         commit: true,
    //         push: true,
    //         remote: 'git@github.com:dmh/theme_core_site_test.git',
    //         message: 'update',
    //         dir: '<%= temp %>',
    //         branch: 'gh-pages'
    //     }
    // }
};
