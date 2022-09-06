const express = require("express");
const session = require("express-session");
const server = express();
server.use(
    session({
        // 配置
        secret: "pswd",
        name: "sessionID",
        resave: false,
        saveUninitialized: true,
    })
);
server.use(express.urlencoded());
server.post("/api/login", (req, res) => {
    if (req.body.user !== "admin" || req.body.pswd !== "123") {
        console.log("登陆失败");
        req.session.isLogin = false;

        res.send({ status: 1, msg: "登陆失败" });
        return;
    }

    req.session.user = req.body;
    req.session.isLogin = true;

    res.send({ status: 0, msg: "登陆成功" });
    console.log(req.session);
});
server.get("/api/user", (req, res) => {
    console.log(req.session);
    if (!req.session.isLogin) {
        console.log("未登录");
        res.send({
            status: 1,
            msg: "未登录",
        });
        return;
    }

    res.send({ status: 0, msg: "登陆成功", data: req.session.user });
    console.log("登陆成功");
});

server.get("/api/logout", (req, res) => {
    req.session.destroy();
    res.send({ status: 0, msg: "退出成功" });
});

server.listen(80, function () {
    console.log("server started at http://127.0.0.1");
});
