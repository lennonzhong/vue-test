const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./../main.js"),
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[name].[hash:8].js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 8888,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./../index.html"),
    }),
  ],
};
