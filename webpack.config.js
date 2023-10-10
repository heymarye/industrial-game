const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    //
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/favicon.ico",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/style/", to: "style/" },
        { from: "./src/assets/", to: "assets/" },
        { from: "./src/data", to: "data/" },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
};