module.exports = {
    options: {
        port: 9007,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    localhost: {
        options: {
            base: ['.','<%= temp %>'],
        }
    }
    // example of another local server with another port and without livereload

    // taskName: {
    //     options: {
    //         port: 9005,
    //         base: folderName,
    //         livereload: false,
    //         keepalive: true
    //     }
    // }
};
