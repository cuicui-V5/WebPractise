import a from "./m";

console.log(a);

let fun = function (a: number, b: number): number {
    return a + b;
};

console.log(fun(123, 2312));

const aa = {
    aa: 123,
    b: 3213,
};
aa.b = 2421;
console.log(aa);
