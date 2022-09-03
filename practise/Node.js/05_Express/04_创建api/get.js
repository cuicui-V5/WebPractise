const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.get("/api/get", function (req, res) {
    console.log("收到get请求" + req.url);
    res.send({
        status: 0,
        msg: "ok",
        data: req.query,
    });
});

server.listen(80, function () {
    console.log("http://127.0.0.1");
});
