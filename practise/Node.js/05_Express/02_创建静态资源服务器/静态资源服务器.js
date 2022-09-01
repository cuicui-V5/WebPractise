const express = require("express");
const path = require("path");
const server = express();
server.use("/public", express.static(path.join(__dirname, "public")));
server.listen(80, function () {
    console.log("server started at http://127.0.0.1");
});
