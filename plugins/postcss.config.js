const plugin = require('./postcss-physical-to-logical');

module.exports = () => {
    return {
        plugins: [plugin({})],
    };
};