const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!pug-loader!src/template/index.pug',
    }),
  ]
}
module.exports = config;