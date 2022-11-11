// 引入插件
const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    devtool: "source-map",
    // 入口文件
    entry: "./src/index.ts",
    // 输出设置
    output: {
        // 输出路径
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // 关闭箭头函数
        environment: {
            arrowFunction: false,
        },
    },
    // 生产模式
    mode: "production",
    // 打包的拓展名
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            chrome: "88",
                                        },
                                        corejs: "3",
                                        useBuiltIns: "usage",
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader",
                ],
                exclude: /node_modules/,
            },
            {
                // less的处理
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {},
                    },
                    "less-loader",
                ],
            },
        ],
    },
    // 插件
    plugins: [
        new htmlPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
