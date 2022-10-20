import express from "express";

const app = express();

const mw = function (req, res, next) {
    console.log(req.host, req.url);
    next();
};

const stu_data = [
    {
        id: "001",
        name: "car1",
        age: "18",
    },
    {
        id: "002",
        name: "car2",
        age: "183",
    },
    {
        id: "003",
        name: "car3",
        age: "128",
    },
];
app.use(mw);
app.get("/car", (req, res) => {
    console.log(`收到${req.hostname}的请求`);
    res.send(stu_data);
});

app.listen(5001, "127.0.0.1", () => {
    console.log("服务器2启动成功", "请求网址为 http://127.0.0.1:5001/car");
});
