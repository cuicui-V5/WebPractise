const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // // 第一种方法
        // proxy:"http://127.0.0.1:5001/car"
        // 第二种方法
        proxy: {
            "/apiStu": {
                //转发的目标, !!注意: 只需要写到端口号即可, 后面不需要写
                target: "http://127.0.0.1:5000/",
                // 支持ws, 默认值: true
                ws: true,
                // 更改请求头中的host信息, 默认值: true
                changeOrigin: true,
                // 路径重写, 内为正则表达式
                pathRewrite: {
                    "^/apiStu": "",
                },
            },
            "/apicar": {
                target: "http://127.0.0.1:5001/",
                pathRewrite: {
                    "^/apicar": "",
                },
            },
        },
    },
});
