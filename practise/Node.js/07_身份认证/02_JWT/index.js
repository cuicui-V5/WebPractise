// 导入模块
// 生成jwt
const jwt = require("jsonwebtoken");
// 解析jwt为json
const { expressjwt } = require("express-jwt");

const express = require("express");
const app = express();

const secretKey = ",/.,/.,.,3123";
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/login/] }));
app.use(express.json());
app.post("/login", (req, res) => {
    const token = jwt.sign(req.body, secretKey, {
        expiresIn: "1000s",
    });
    res.send(token);
});

app.get("/user", (req, res) => {
    res.send(req.auth.name);
    console.log(req.auth.name);
});

app.listen(80, () => {
    console.log("http://127.0.0.1");
});
