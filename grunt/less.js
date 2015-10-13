module.exports = {
    main: {
        options: {
            sourceMap: true,
            sourceMapFilename: '<%= temp %>/main.css.map',
            sourceMapURL: 'main.css.map'
        },
        files: {
            '<%= temp %>/main.css': '<%= dev %>/styles/main.less'
        }
    },
    header: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/header.css': '<%= dev %>/styles/header.less'
        }
    },
    headerMin: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/headerMin.css': '<%= dev %>/styles/headerMin.less'
        }
    },
    bootstrap: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/bootstrap.css': '<%= dev %>/styles/bootstrap.less'
        }
    },
    local: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/local.css': '<%= dev %>/styles/local.less'
        }
    },
    components: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/components.css': '<%= dev %>/styles/components.less'
        }
    }
};
