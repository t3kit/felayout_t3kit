module.exports = {
    default: {
        exclude: ['bigFiles', 'bigCssJs', 'smallFiles', 'smallJs', 'smallLess', 'lessWithoutAutoPrefixer']
    },
    small: {
        exclude: ['bigFiles', 'bigCssJs', 'less']
    },
    big: {
        exclude: ['smallFiles', 'smallJs', 'smallLess', 'lessWithoutAutoPrefixer']
    },
};
