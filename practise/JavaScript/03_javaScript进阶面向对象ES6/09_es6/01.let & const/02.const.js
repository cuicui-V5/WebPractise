const pi = 3.14;
// pi = 3; //Assignment to constant variable. 常量不能被赋值
const arr = [];
arr[1] = 1; //可以正常修改
arr[2] = 2;
console.log(arr);
arr = [4, 3, 2, 1]; //报错 常量不能被修改, 引用类型可以修改, 因为const里面存的是内存地址
