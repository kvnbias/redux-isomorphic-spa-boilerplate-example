
'use strict';

let
  debug = process.env.NODE_ENV !== "production",
  path = require('path'),
  pagesBase = path.resolve('./web/assets/reactjs/maps'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config');

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      app: {
        files: ['src/**/*.jsx', 'src/**/*.js', 'api/**/*.js'],
        tasks: [
          'webpack:build-dev',
          'eslint',
          'jshint',
          'shell:flow'
        ],
        options: {
          spawn: false
        }
      }
    },
    webpack: {
      options: webpackConfig,
      build: {
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            'process.env': {
              /** This has effect on the react lib size */
              'NODE_ENV': JSON.stringify('production')
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
          })
        )
      },
      'build-dev': {
        devtool: 'inline-sourcemap',
        debug: true,
        plugins: webpackConfig.plugins.concat(
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()
        )
      }
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackConfig,
        publicPath: webpackConfig.output.publicPath
      },
      start: {
        keepAlive: true,
        webpack: {
          devtool: 'eval',
          debug: true
        }
      }
    },
    eslint: {
      validate: [
        'api/**/*.js',
        'src/**/*.js',
        'src/**/*.jsx'
      ]
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: true,
        force: true
      },
      files: ['api/**/*.js', 'src/**/*.js']
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components',
        destPrefix: 'static',
      },
      scripts: {
        files: {
          'socket.io/socket.io.js': 'socket.io-client/socket.io.js'
        }
      }
    },
    shell: {
      flow: {
        command: 'flow check'
      }
    },
    concurrent: {
      start: {
        tasks: ['watch:app'],
        options: {
          logConcurrentOutput: true,
          limit: 2
        }
      }
    }
  });

  /** handle plugins */
  grunt.loadNpmTasks('grunt-bowercopy');

  /** react transpiler */
  grunt.loadNpmTasks('grunt-webpack');

  /** es6 linter */
  grunt.loadNpmTasks('grunt-eslint');

  /** file watcher */
  grunt.loadNpmTasks('grunt-contrib-watch');

  /** concurrent task runner */
  grunt.loadNpmTasks('grunt-concurrent');

  /** terminal command executor */
  grunt.loadNpmTasks('grunt-shell');

  /** js linter */
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [
    'bowercopy',
    'webpack:build'
  ]);

  grunt.registerTask('build', ['webpack:build']);

  grunt.registerTask('dev', [
    'bowercopy',
    'webpack:build-dev',
    'shell:flow',
    'eslint',
    'jshint',
    'concurrent:start'
  ]);
};
