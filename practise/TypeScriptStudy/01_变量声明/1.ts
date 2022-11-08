// 类型声明
let a: number;
a = 3;

// 指定函数返回值
function fun(e: number): number {
    return 1;
}

// 自动类型推断
let b = true;

// 字面量声明
let x: 10;
x = 10;

// 联合类型

let c: string | number;
c = "124";
c = 123;

let d: "male" | "female";
d = "male";
d = "female";

// any类型
// 对一个变量设置了any类型后, 就相当于对该变量关闭了类型检测

let e: any; // 显式的any
let f; // 隐式的any
e = 1;
e = "hi";
e = true;

let s = "hello";
s = e; //any类型的变量可以赋值给任何类型的变量

// unknown 类型
let g: unknown;

// unknown 相当于类型安全的any, 不可以随意赋值给其他变量

g = "hi";
// 直接赋值会报错
s = g;

// 可以进行手动类型检查
if (typeof g === "string") {
    s = g;
}

// 也可以使用类型断言 assertion 告诉编译器变量类型
s = g as string;

// 泛型写法
s = <string>g;
// ======================
// 字面量 表示变量只能为该值
let x1: {};
let x2: "male";
let x3: 10;

// void 没有返回值
function h(): void {
    return undefined;
}
// never 绝对没有返回值
function i(): never {
    throw new Error("error!");
}

// object 不实用, 很多都是对象类型
let j: object;
j = {};
j = [];
j = function () {};

// 指定对象内属性
let k: { name: string; [propName: string]: any }; // 表示必须要有name, 其他属性任意
k = { name: "tim", a: 1, b: 2 };

// 指定函数参数和返回值
let l: (arg0: number, arg1: number) => number;
l = function (arg0, arg1) {
    return 1;
};

// 数组
let m: number[];
let n: string[];
let o: Array<number>;

// tuple 指定了元素数量的数组
let p: [string, string];
p = ["hi", "ni"]; // 只允许两个元素

// enum 枚举类型
enum Gender {
    male = "男",
    female = "女",
}
console.log(Gender.male, Gender.female); // 男, 女

//& 运算符
let r: { name: string } & { age: number };
r = { name: "tim", age: 14 };

// 自定义类型
type myType = (prop1: number) => number;

let t: myType;
