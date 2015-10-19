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
};
