module.exports = {
    options: {
        report: 'gzip'
    },
    site: {
        files: {
            '<%= tmp %>/main.js': ['<%= tmp %>/main.js']
        }
    }
};
