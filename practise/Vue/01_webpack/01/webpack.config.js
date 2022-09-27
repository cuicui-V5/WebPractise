const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "index.html",
});

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
    mode: "development", //指定构建模式， 可选值有development, production
    entry: path.join(__dirname, "./src/index.js"), //指定打包入口
    output: {
        path: path.join(__dirname, "./dist"), //输出文件的存放位置
        filename: "js/bundle.js", //输出文件的命名
    },
    devtool: "eval-source-map", //暴露源码和行号
    // devtool: "nosources-source-map", //只暴露行号, 不暴露代码
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.jpg|png|gif$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 2000, outputPath: "image" },
                    },
                ],
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [htmlWebpackPlugin, cleanWebpackPlugin],
    devServer: {
        open: true,
        port: 80,
        host: "127.0.0.1",
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
};
