module.exports = {
    server: {
        options: {
            message: 'Server is ready! \nhttp://localhost:<%= connect.options.port %>'
        }
    },
    site: {
        options: {
            message: 'Static site successfully updated'
        }
    }
};
