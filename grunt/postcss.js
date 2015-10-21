module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({ browsers: ['last 2 version'] })
        ]
    },
    big: {
        dist: {
            src: ['<%= big %>/main.css', '<%= big %>/header.css', '<%= big %>/headerMin.css']
        }
    },
    site: {
        dist: {
            src: ['<%= site %>/main.css', '<%= site %>/header.css', '<%= site %>/headerMin.css']
        }
    }
};
