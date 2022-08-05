// const sum = (...args) => {
//     let total = 0;
//     args.forEach((item) => (total += item));
//     return total;
// };
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//剩余参数和数组解构同时使用

let arr=[1,2,3,4,5]
let [arg1, ...args] = arr;
console.log(arg1);
console.log(args);