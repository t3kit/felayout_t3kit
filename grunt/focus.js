module.exports = {
    small: {
        exclude: ['big', 'bigCssJs']
    },
    big: {
        exclude: ['small', 'smallJs', 'smallLess']
    },
};
