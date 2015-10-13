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
                '<%= small %>/*'
            ]
        }]
    },
    bigFolder: {
        files: [{
            dot: true,
            src: [
                '<%= big %>/*'
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
