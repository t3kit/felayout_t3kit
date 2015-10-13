module.exports = {
    options: {
        stripBanners: false
    },
    toMainCss: {
        src: [
            '<%= tmp %>/bootstrap.css',
            '<%= tmp %>/components.css',
            '<%= tmp %>/main.css'
        ],
        dest: '<%= tmp %>/main.css'
    }
};
