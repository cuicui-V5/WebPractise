let reg = new RegExp();
reg = /{{\s*([a-zA-Z]+)\s*}}/;
let str = "<div>{{name}}今年{{ age }}岁了</div>";

let res;

res = reg.exec(str);
console.log(res);
res = reg.exec(str);
console.log(res);
res = reg.exec(str);
console.log(res);
res = reg.exec(str);
console.log(res);
res = reg.exec(str);
console.log(res);
