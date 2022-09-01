// 导入express
const express = require("express");
// 创建服务器
const server = express();
// 开启服务器
server.listen(80, () => {
    console.log("server started at http://127.0.0.1");
});
