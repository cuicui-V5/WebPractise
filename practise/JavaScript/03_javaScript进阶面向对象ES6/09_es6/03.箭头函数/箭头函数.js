//如果函数的代码只有一行且函数的返回值就是代码的运行结果, 那么可以省略箭头函数的大括号 `{ }`

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(1, 2));
//如果箭头函数的形参只有一个参数, 那么可以省略小括号 `( )`

// const fn = (v) => v;
// console.log(fn(123));

// 箭头函数的this关键字
const obj = { oname: "abc" };
function fn() {
    console.log(this);
    return ()=>console.log(this);
}
const resFn = fn.call(obj);
resFn();

// const fn = () => {
//     console.log(this);
// }
// fn.call(obj) //无效, 箭头函数的this绑定无法被修改