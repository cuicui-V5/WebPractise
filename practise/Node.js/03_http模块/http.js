//1. 导入http
const http = require("http");

//生成http对象

const server = http.createServer();

//绑定事件

server.on("request", function (req, res) {
    console.log("someone visit our server" + req.url + req.method);
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("hello world 你好世界!");
});

//启动wev服务器

server.listen(80, () => {
    console.log("server started ar http://127.0.0.1");
});
