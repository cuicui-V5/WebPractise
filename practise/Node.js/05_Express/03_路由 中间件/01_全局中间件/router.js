// 导入express
const express = require("express");

const moment = require("moment");

// 创建router对象
const router = express.Router();

// 开始定义路由
router.get("/", function (req, res) {
    console.log("get请求" + req.reqTime);
    res.send(req.reqTime);
});
router.post("/", function (req, res) {
    console.log("post请求" + req.reqTime);
    res.send(req.reqTime);
});

const mw = function (req, res, next) {
    console.log("中间件处理中");
    req.reqTime = moment().format("YYYY-MM-DD-HH-mm-ss-SSS");
    next();
};

// 导出路由
module.exports = { router, mw };
