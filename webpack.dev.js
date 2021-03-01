const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const smp = new SpeedMeasurePlugin();

const devConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
});

module.exports = smp.wrap(devConfig);
