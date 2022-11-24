import { log } from "console";
import express from "express";

const app = express();

app.get("/setCookie", (req, res) => {
    log("someone get setCookie");
    res.cookie("name", "tim");
    res.send("hello");
});

app.listen(1234, "localhost", () => {
    console.log("服务启动成功");
});
