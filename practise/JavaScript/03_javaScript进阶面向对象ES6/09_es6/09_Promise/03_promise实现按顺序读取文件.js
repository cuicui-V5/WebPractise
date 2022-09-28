import tfs from "then-fs";

// tfs.readFile("./txt/1.txt", "utf8").then(
//     result => {
//         console.log(result);
//     },
//     err => {
//         console.log(err);
//     }
// );
// tfs.readFile("./txt/2.txt", "utf8").then(
//     result => {
//         console.log(result);
//     },
//     err => {
//         console.log(err);
//     }
// );
// tfs.readFile("./txt/3.txt", "utf8").then(
//     result => {
//         console.log(result);
//     },
//     err => {
//         console.log(err);
//     }
// );

// -------这种方法可以读取文件, 但是不能确保顺序, 如果想要确保顺序, 需要使用链式调用

tfs.readFile("./txt/1.txt", "utf8")
    .then(result => {
        console.log(result);
        return tfs.readFile("./txt/12.txt", "utf8");
    })
    .then(result => {
        console.log(result);
        return tfs.readFile("./txt/3.txt", "utf8");
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
