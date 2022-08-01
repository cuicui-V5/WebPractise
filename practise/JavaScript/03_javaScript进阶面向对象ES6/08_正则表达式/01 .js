//边界符
// let reg = /^abc$/; //^$表示精准匹配
// console.log(reg.test("ac"));
// console.log(reg.test("abc"));
// console.log(reg.test("abcabc"));

//字符类
// let reg2 = /[a-z]/ //可以使用 - 作为范围符
// let reg3 = /[a-zA-Z]/ //可以使用 - 作为范围符
// console.log(reg2.test("hjg"));
// console.log(reg3.test("ABC"));

// let reg4 = /[a-zA-Z]/ //方括号内部的^作为取反符
// console.log(reg4.test("hjg"));
// console.log(reg4.test("ABC"));

let reg5 = /^[a-zA-Z]*$/ //方括号内部的^作为取反符
console.log(reg5.test("h"));
console.log(reg5.test("A"));
