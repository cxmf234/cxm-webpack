const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin(), new LodashModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["lodash"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
