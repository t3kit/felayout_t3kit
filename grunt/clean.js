module.exports = {
    siteFolder: {
        files: [{
            dot: true,
            src: [
                '<%= site %>/*',
                '!<%= site %>/.git*'
            ]
        }]
    },
    smallFolder: {
        files: [{
            dot: true,
            src: [
                '<%= small %>/*',
                '!<%= small %>/.git*'
            ]
        }]
    },
    bigFolder: {
        files: [{
            dot: true,
            src: [
                '<%= big %>/*',
                '!<%= big %>/.git*'
            ]
        }]
    },
    tempFolder: {
        files: [{
            dot: true,
            src: [
                '<%= temp %>/*'
            ]
        }]
    }
};
