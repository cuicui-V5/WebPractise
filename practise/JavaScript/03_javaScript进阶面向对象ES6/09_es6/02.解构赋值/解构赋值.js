//数组解构

// let[a, b, c] =[1, 2, 3];
// console.log(a, b, c);

//数组解构 变量名不匹配的情况
// let [a, b, c, d, e] = [1, 2, 3];
// console.log(a, b, c, d, e);

// 对象解构
// obj = {
//     oname: "niu",
//     num: 20
// }
// let { oname, num } = obj;
// console.log(oname, num);

// 对象解构 别名
obj = {
    oname: "niu",
    num: 20,
};
let { oname: MyName, num: MyNum } = obj;
console.log(MyName, MyNum);
