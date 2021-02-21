const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    /*  main bundle 会随着自身的新增内容的修改，而发生变化。
        vendor bundle 会随着自身的 module.id 的变化，而发生变化
        manifest bundle 会因为现在包含一个新模块的引用，而发生变化。
        HashedModuleIdsPlugin用来解决不论是否添加任何新的本地依赖，对于前后两次构建，vendor hash 都应该保持一致
    */
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
