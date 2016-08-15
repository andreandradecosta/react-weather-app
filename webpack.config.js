var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

var Dashboard = require('webpack-dashboard')
var DashboarPlugin = require('webpack-dashboard/plugin')
var dashboard = new Dashboard()

module.exports = {

    entry:[
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig, new DashboarPlugin(dashboard.setData)]
};
