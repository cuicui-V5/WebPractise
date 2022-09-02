// 导入express
const express = require("express");

// 创建服务器实例
const server = express();

// 导入路由模块
const router = require("./router");

// 调用中间件
server.use(router.mw);

// 注册路由模块
server.use("/user", router.router);

// 开启服务器
server.listen(80, function (req, res) {
    console.log("http://127.0.0.1");
});
