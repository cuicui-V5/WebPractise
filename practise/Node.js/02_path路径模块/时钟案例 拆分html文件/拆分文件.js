//导入模块
const fs = require("fs");
const path = require("path");

//读取文件

let content;
let filePath = path.join(__dirname, "./index.html");
let filePathOut = path.join(__dirname, "./OUTPUT");

fs.readFile(filePath, "utf-8", function (err, res) {
    if (err) {
        console.log(err.message);
    } else {
        content = res;
        // console.log("读取成功! 内容为 " + content);
        fileProcess(content);
    }
});

/**
 *
 * @param {string} content
 */
function fileProcess(content) {
    //处理文件
    // 利用正则匹配
    let regStyle = /<style>([\s\S]*)<\/style>/;

    let resStyle = regStyle.exec(content);

    let regJS = /<script>([\s\S]*)<\/script>/;

    let resJS = regJS.exec(content);

    //将content去掉style和script
    content = content.replace(regStyle, `<link rel="stylesheet" href="index.css">`);
    content = content.replace(regJS, `<script src="./index.js"></script>`);

    //输出文件到指定文件夹
    fs.writeFile(path.join(filePathOut, "./index.css"), resStyle[1].trim(), function (err) {
        if (err) {
            console.log(err.message);
        }
    });

    fs.writeFile(path.join(filePathOut, "./index.js"), resJS[1].trim(), function (err) {
        if (err) {
            console.log(err.message);
        }
    });
    fs.writeFile(path.join(filePathOut, "./index.html"), content.trim(), function (err) {
        if (err) {
            console.log(err.message);
        }
    });
}
