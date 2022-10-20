import express from "express";
// import cors from 'cors';
const app = express();
// app.use(cors())
const mw = function (req, res, next) {
    console.log(req.host, req.url);
    next();
};
app.use(mw);

const stu_data = [
    {
        id: "001",
        name: "tim",
        age: "18",
    },
    {
        id: "002",
        name: "tim1",
        age: "183",
    },
    {
        id: "003",
        name: "tim2",
        age: "128",
    },
];
app.get("", (req, res) => {
    console.log(`收到${req.url}的请求`);
});
app.get("/student", (req, res) => {
    console.log(`收到${req.hostname}的请求`);
    res.send(stu_data);
});

app.listen(5000, "127.0.0.1", () => {
    console.log("服务器1启动成功", "请求网址为 http://127.0.0.1:5000/student");
});
