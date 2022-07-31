//浅拷贝
// let o = {
//     name: "怪人",
//     sex: "男",
//     goods: {
//         gname: "oppo echo",
//         price: 99,
//     },
// };
function shallowCopy(raw) {
    const copy = {};
    for (const key in raw) {
        copy[key] = raw[key];
    }
    return copy;
}
// let p = shallowCopy(o);

// console.log(p);

//深拷贝
let o = {
    name: "怪人",
    sex: "男",
    goods: {
        gname: "oppo echo",
        price: 99,
    },
};
function deepCopy(raw) {
    const copy = {};
    for (const key in raw) {
        if (raw[key] instanceof Object) { //如果是对象 就递归
            copy[key] = deepCopy(raw[key]);
        } else {
            copy[key] = raw[key];
        }
    }
    return copy;
}
let p = deepCopy(o);
let s= shallowCopy(o)
o.goods.gname = "vivo";
console.log(p);
console.log(s);
