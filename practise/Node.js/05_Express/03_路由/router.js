// 导入express
const express = require("express");

// 创建router对象
const router = express.Router();

// 开始定义路由
router.get("/", function (req, res) {
    console.log("get请求");
});
router.post("/", function (req, res) {
    console.log("post请求");
});

// 导出路由
module.exports = router;
