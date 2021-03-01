const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
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
});
