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
      title: 'Pug Template',
      h2: 'Samer AbdElsatar',
      template: '!!pug-loader!src/template/index.pug',
      posts: [{
        name: 'samar',
        age: 18
      }, 
      {
        name: 'Tommy',
        age: 29
        }]
    }),
  ]
}
module.exports = config;