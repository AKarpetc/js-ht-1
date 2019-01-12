'use strict';

let path = require('path');
let bubel= require('./babel.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,

}


