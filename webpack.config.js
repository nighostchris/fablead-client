const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //     },
    //     output: {
    //         comments: false,
    //     },
    // }),
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Fablead',
      template: './src/index.ejs'
    })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     // NODE_ENV: JSON.stringify('production')
    //   }
    // }),
  ],
  devServer: {
    historyApiFallback: true,
  }
};
