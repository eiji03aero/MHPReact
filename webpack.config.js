const path = require('path')
const webpack = require('webpack')
const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    // webpackHotMiddleware: 'webpack-hot-middleware/client',
    app: './src/index.js',
    sampleApp: './src/sample/sampleIndex.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
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
          presets: ['react', 'es2015', 'stage-2'],
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: bourbonPath.concat(neatPath)
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png)$/,
        loaders: ['file-loader?name=assets/images/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
      $: 'jquery',
      jquery:'jquery',
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
}
