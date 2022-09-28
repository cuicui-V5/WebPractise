import tfs from "then-fs";

const promiseArr = [
    tfs.readFile("./txt/1.txt", "utf8"),
    tfs.readFile("./txt/2.txt", "utf8"),
    tfs.readFile("./txt/3.txt", "utf8"),
];

// Promise.all(promiseArr)
//     .then(([r1, r2, r3]) => {
//         console.log(r1, r2, r3);
//     })
//     .catch(err => {
//         console.log(err.message);
//     });
Promise.race(promiseArr)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err.message);
    });
