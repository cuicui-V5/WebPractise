// 导入模块
// 生成jwt
const jwt = require("jsonwebtoken");
// 解析jwt为json
const { expressjwt } = require("express-jwt");

const express = require("express");
const app = express();

const secretKey = ",/.,/.,.,3123";
// jwt中间件 解析jwt为json
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/login/] }));

app.use(express.json());
app.post("/login", (req, res) => {
    // 生成jwt
    const token = jwt.sign(req.body, secretKey, {
        expiresIn: "1000s",
    });
    res.send(token);
});

app.get("/user", (req, res) => {
    res.send(req.auth.name);
    console.log(req.auth.name);
});

// 错误中间件
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send({
        status: 1,
        msg: err.message,
    });
    next();
});

app.listen(80, () => {
    console.log("http://127.0.0.1");
});
