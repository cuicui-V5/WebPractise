const fs = require("fs");
data = "写入的内容";
fs.writeFile("01_fs文件系统模块\\1.txt", data, function (err) {
    if (err) {
        console.log("写入失败!!" + err.message);
    } else {
        console.log("写入成功");
    }
});
