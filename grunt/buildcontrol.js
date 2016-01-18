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
    big: {
        options: {
            dir: '<%= big %>',
            branch: 'big'
        }
    },
    small: {
        options: {
            dir: '<%= small %>',
            branch: 'small'
        }
    }
};
