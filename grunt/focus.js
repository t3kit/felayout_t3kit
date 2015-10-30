module.exports = {
    default: {
        exclude: ['big', 'bigCssJs', 'small', 'smallJs', 'smallLess']
    },
    small: {
        exclude: ['big', 'bigCssJs']
    },
    big: {
        exclude: ['small', 'smallJs', 'smallLess']
    },
};
