const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main:  path.resolve(__dirname, 'src', 'index.jsx') }, //точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },//куда собираем
    resolve: {
        alias: {
           components: path.resolve(__dirname, 'src', 'components')
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'], //sass-loader
                })
            }
        ]
    },
    plugins: [ //plugin register
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        })
    ]
};