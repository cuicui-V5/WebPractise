const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "index.html",
});
module.exports = {
    mode: "development", //指定构建模式， 可选值有development, production
    entry: path.join(__dirname, "./src/index.js"), //指定打包入口
    output: {
        path: path.join(__dirname, "./dist"), //输出文件的存放位置
        filename: "bundle.js", //输出文件的命名
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        open: true,
        port: 80,
        host: "127.0.0.1",
    },
};
