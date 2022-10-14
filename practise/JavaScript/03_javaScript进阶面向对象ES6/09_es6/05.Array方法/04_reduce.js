// 累加值
let arr = [1, 2, 3, 4, 5];

let res = arr.reduce((sum, val) => {
    sum += val;
    return sum;
}, 0);
console.log(res);

// 拼合字符串
let arr2 = ["小明", "小红", "小强"];

let res2 = arr2.reduce((sum, val) => {
    sum += val;
    return sum;
}, "");
console.log(res2);

// 求每个人的年龄和

let arr3 = [
    {
        name: "小明",
        age: 20,
    },
    {
        name: "小hs",
        age: 30,
    },
    {
        name: "小a",
        age: 50,
    },
];

let res3 = arr3.reduce((sum, val) => {
    sum += val.age;
    return sum;
}, 0);
console.log(res3);
