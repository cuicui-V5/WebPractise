// 1. 获取请求的`url`地址
// 2. 设置默认的相应内容为`404 `
// 3. 判断用户请求的是否为`/ `或 `index.html`
// 4. 判断用户请求的是否为`about.html`
// 5. 设置`Content-Type` 响应头, 防止中文乱码
// 6. 使用`res.end()`把内容相应给客户端

const http = require("http");
const fs = require("fs");
const path = require("path");
let result;
const server = http.createServer();
server.on("request", function (req, resp) {
    console.log(`收到请求, url: ${req.url}, 请求方法为: ${req.method}`);
    // resp.setHeader("Content-Type", "text/html;charset=utf8");
    console.log(path.join(__dirname, req.url));
    // const fileName = path.basename(req.url);
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "./index.html"), "utf-8", (err, res) => {
            result = res;
            resp.end(result);
        });
    } else {
        fs.readFile(path.join(__dirname, req.url), "utf-8", (err, res) => {
            // console.log(`读取${fileName}`);
            if (err) {
                // console.log(`找不到${fileName}`);
                resp.end("404 not found! 🤣🤣🤣");
            } else {
                // console.log(`读取文件成功${res}`);
                result = res;
                resp.end(result);
            }
        });
    }
});

server.listen(80, function () {
    console.log("server start at http://127.0.0.1");
});
