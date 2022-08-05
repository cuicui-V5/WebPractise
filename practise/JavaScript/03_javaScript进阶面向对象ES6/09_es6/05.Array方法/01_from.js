// let arrayLike = {
//     0: "tim",
//     1: "joke",
//     2: "mom",
//     length: 3
// }

// let arr = Array.from(arrayLike)
// console.log(arr);



let arrayLike = {
    0: "tim",
    1: "joke",
    2: "mom",
    length: 3
}

let arr = Array.from(arrayLike, item =>item+"处理")
console.log(arr);