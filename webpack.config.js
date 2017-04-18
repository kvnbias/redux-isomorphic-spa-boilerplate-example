
var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'production';
var CopyWebpackPlugin = require('copy-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    index: ['babel-polyfill', 'rxjs', './src/client.jsx']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
          test: /\.json$/,
          loader: 'json-loader'
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {

              /**
               * import react, es2015, stage-0
               * https://babeljs.io/docs/plugins/preset-stage-0/
               */
              presets: [
                'react',
                'es2015',
                'stage-0'
              ],

              /**
               * react-html-attrs
               *     react html attrs support, this will accept class
               *     instead of inputting className
               * transform-class-properties
               *     for es6 classes
               * transform-decorators-legacy
               *     decorators
               */
              plugins: [
                'react-html-attrs',
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-async-to-generator'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: debug ? [
    new CopyWebpackPlugin([
      {
        from: './bower_components/material-design-lite/material.min.css',
        to: './css/material.min.css'
      },
      {
        from: './bower_components/material-design-icons/iconfont',
        to: './icons'
      },
      {
        from: './bower_components/material-design-lite/material.min.js',
        to: './js/material.min.js'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ] : [
    new CopyWebpackPlugin([
      {
        from: './bower_components/material-design-lite/material.min.css',
        to: './css/material.min.css'
      },
      {
        from: './bower_components/material-design-icons/iconfont',
        to: './icons'
      },
      {
        from: './bower_components/material-design-lite/material.min.js',
        to: './js/material.min.js'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
