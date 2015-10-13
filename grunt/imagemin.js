module.exports = {
    site: {
        files: [{
            expand: true,
            cwd: '<%= temp %>',
            src: ['images/{,*/}*.{png,jpg,jpeg,gif,svg}'],
            dest: '<%= site %>'
        }]
    },
    small: {
        files: [{
            expand: true,
            cwd: '<%= temp %>',
            src: ['images/{,*/}*.{png,jpg,jpeg,gif,svg}'],
            dest: '<%= small %>'
        }]
    },
    big: {
        files: [{
            expand: true,
            cwd: '<%= temp %>',
            src: ['images/{,*/}*.{png,jpg,jpeg,gif,svg}'],
            dest: '<%= big %>'
        }]
    }
};
