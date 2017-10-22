const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png)$/,
        loaders: ['file-loader?name=assets/images/[name].[ext]']
      }
    ]
  }
}
