module.exports = {
    server: {
        options: {
            message: 'Server is ready! \nhttp://localhost:<%= connect.options.port %>'
        }
    },
    site: {
        options: {
            message: 'Branch \'site\' successfully updated'
        }
    },
    // big: {
    //     options: {
    //         message: 'Branch \'big\' successfully updated'
    //     }
    // }
};
