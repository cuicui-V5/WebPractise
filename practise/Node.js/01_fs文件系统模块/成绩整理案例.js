const fs = require("fs");

let data = [];
let file = "01_fs文件系统模块\\成绩.txt";
let file1 = "01_fs文件系统模块\\成绩_处理.txt";

//读取文件
fs.readFile(file, "utf-8", (err, res) => {
    if (err) {
        console.log("读取错误！ " + err.message);
        return;
    }
    data = res.split(" ");
    console.log(data);

    let newData = []; //处理后的数据

    //进行数据处理
    data.forEach(item => {
        newData.push(item.replace("=", ":"));
    });
    console.log(newData);
    let str = newData.join("\n");
    console.log(str);

    //写入新数据
    fs.writeFile(file1, str, err => {
        if (err) {
            console.log(err.message);
        }
    });
});
