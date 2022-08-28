const fs = require("fs");
fs.readFile("01_fs文件系统模块\\1.txt", "utf-8", function (err, res) {
    if (err) {
        console.log("文件读取失败!" + err.message);
        return;
    }
    console.log(res);
});
