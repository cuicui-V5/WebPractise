// 导入express
const express = require("express");
// 创建服务器
const server = express();
//监听get请求
server.get("/", function (req, res) {
    // 处理函数
    console.log("收到了一个get请求");
    // 获取查询字符串
    console.log(req.query);

    res.send("get 请求成功");
});
// 监听post请求
server.post("/", function (req, res) {
    // 处理函数
    console.log("收到了一个post请求");
    res.send("post请求成功");
});

// 获取动态参数
server.get("/user/:id/:name", function (req, res) {
    res.send(req.params);
});

// 开启服务器
server.listen(80, () => {
    console.log("server started at http://127.0.0.1");
});
