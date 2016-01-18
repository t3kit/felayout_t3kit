module.exports = {
    default: {
        exclude: ['bigFiles', 'bigCssJs', 'smallFiles', 'smallJs', 'smallLess']
    },
    small: {
        exclude: ['bigFiles', 'bigCssJs']
    },
    big: {
        exclude: ['smallFiles', 'smallJs', 'smallLess']
    },
};
