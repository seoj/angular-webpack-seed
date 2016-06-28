var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context : path.resolve(__dirname, 'app'),
    entry : {
        entry : './entry.js',
        vendor : [ 'angular', 'angular-ui-router' ]
    },
    output : {
        path : path.resolve(__dirname, 'build', 'dist'),
        filename : 'bundle.js'
    },
    plugins : [ new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'), new ngAnnotatePlugin({
        add : true
    }), new CopyWebpackPlugin([ {
        from : 'index.html'
    } ]) ],
    module : {
        loaders : [ {
            test : /\.html$/,
            loader : 'html-minify!raw'
        }, {
            test : /\.css$/,
            loader : 'style!css'
        } ]
    }
};