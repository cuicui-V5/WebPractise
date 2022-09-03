const express = require("express");
const server = express();
const router = require("./router");
server.use(router);
server.listen(80, function () {
    console.log("http://127.0.0.1");
});
