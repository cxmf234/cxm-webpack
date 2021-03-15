const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  /*  入口起点：使用entry配置手动分离代码
   如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中
   这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。 */
  entry: {
    app: "./src/index.js",
    another: "./src/another-module.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    new DashboardPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  /* SplitChunksPlugin,插件可以将公共的依赖模块提取到已有的 entry chunk 中，
  或者提取到一个新生成的 chunk。让我们使用这个插件，将前面示例中重复的 lodash 模块去除： */
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
