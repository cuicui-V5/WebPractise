const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.post("/api/post", function (req, res) {
    res.send({
        status: 0,
        msg: "ok",
        data: req.body,
    });
});

server.listen(80, function () {
    console.log("http://127.0.0.1");
});
