
'use strict';

const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  /** context of your app */
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,

  /** app entry point */
  entry: './client.jsx',
  module: {
    loaders: [
      {
        /** test js or jsx for transpile */
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          /** import react, es2015, stage-0(https://babeljs.io/docs/plugins/preset-stage-0/) */
          presets: ['react', 'es2015', 'stage-0'],

          /**
           * react-html-attrs (react html attrs support, this will accept class instead of inputting className)
           * transform-class-properties (for es6 classes)
           * transform-decorators-legacy (decorators)
           */
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy'
          ],
        }
      }
    ]
  },
  resolve: {
    /** include file types that should be transpiled */
    extensions: ['', '.js', '.jsx']
  },
  output: {
    /** compiled dest */
    path: __dirname + '/static/dist/js/',

    /** public path to be watched (for live reloading and watch on webpack-dev-server) */
    publicPath: '/static/dist/js/',

    /** output file from the compiled dest */
    filename: 'index.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
      compress: {
        warnings: false
      }
    }),
  ]
};
