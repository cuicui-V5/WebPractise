const express = require("express");
const server = express();
server.get("/api/jsonp", function (req, res) {
    const callback = req.query.callback;
    delete req.query.callback;
    const jsonp = `${callback}(${JSON.stringify(req.query)})`;
    res.send(jsonp);
});

server.listen(80, function () {
    console.log("http://127.0.0.1");
});
