let arr = [1, 2, 3, 4, 5];
console.log(...arr);

// 合并数组 方法1
arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
arr3 = [...arr1, ...arr2];
console.log(...arr3);
// 方法2
arr1.push(...arr2);
console.log(arr1);

let lis = document.getElementsByTagName("li");
let arrLis = [...lis];
