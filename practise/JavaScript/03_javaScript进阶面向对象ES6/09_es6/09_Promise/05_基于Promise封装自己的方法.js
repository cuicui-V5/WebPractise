import fs from "fs";

function getFile(filePath) {
    //返回一个Promise实例对象
    // new Promise的参数为一个回调, 回调的参数为成功的回调, 失败的回调
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf8", function (err, res) {
            if (err) {
                return reject(err.message);
            }
            resolve(res);
        });
    });
}

// getFile("./txt/1.txt")
//     .then(
//         res => {
//             console.log(res);
//         },
//         err => {
//             console.log(err);
//         }
//     )
//     .catch(err => {
//         console.log(err);
//     });

console.log("a");
async function getallFile() {
    console.log("b");
    const r1 = await getFile("./txt/1.txt");
    console.log(r1);
    const r2 = await getFile("./txt/2.txt");
    console.log(r2);
    const r3 = await getFile("./txt/3.txt");
    console.log(r3);
    console.log("d");
}
getallFile();
console.log("c");
