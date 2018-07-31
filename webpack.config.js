/**
 * Webpack easy setup:
 * https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
 */

const webpack = require("webpack");

const jQueryPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
});


module.exports = {
  plugins: [
    jQueryPlugin,
  ],
};