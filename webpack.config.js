const path = require('path');
const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    plugins: [
        //new BundleAnalyzerPlugin()
    ],
    output: {
        filename: '[name].js?t=' + new Date().getTime(),
        chunkFilename: '[name].js?t=' + new Date().getTime()
    },
    resolve: {
        alias: {
            '-assets': __dirname + '/resources/js/assets',
            '-components': __dirname + '/resources/js/components',
            '-views': __dirname + '/resources/js/views',
            '-variables': __dirname + '/resources/js/variables',
            '-utils': __dirname + '/resources/js/utils',
            '-color': __dirname + '/resources/js/color',
            '-config': __dirname + '/resources/js/config',
            '-const': __dirname + '/resources/js/const',
        }
    }
};
