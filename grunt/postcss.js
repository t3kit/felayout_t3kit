module.exports = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({ browsers: ['last 2 version'] })
        ]
    },
    dist: {
        src: ['<%= big %>/main.css', '<%= big %>/header.css', '<%= big %>/headerMin.css']
    }
};
