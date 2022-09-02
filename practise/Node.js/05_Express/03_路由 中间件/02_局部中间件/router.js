const express = require("express");

//新建router

const router = express.Router();

//定义中间件
// router.use(function (req, res, next) {
//     next();
// });

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
//创建路由
router.get("/", function (req, res) {
    console.log("收到了get请求");
    console.log(req.body);

    res.send("get");
});

router.post("/", function (req, res) {
    console.log("post");
    console.log(req.body);

    res.send("post");
});
router.use(function (err, req, res, next) {
    console.log(err.message);
    res.send("发生了错误!" + err.message);
    next();
});
// 导出

module.exports = router;
