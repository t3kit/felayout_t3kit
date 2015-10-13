module.exports = {
    options: {
        report: 'gzip'
    },
    site: {
        files: {
            '<%= tmp %>/main.css': ['<%= tmp %>/main.css']
        }
    },
    components: {
        files: {
            'base/components.css': ['<%= tmp %>/components.css']
        }
    }
};
