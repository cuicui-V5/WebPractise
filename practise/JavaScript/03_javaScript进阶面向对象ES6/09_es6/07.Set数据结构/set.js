// const s = new Set([1, 1, 2, 3, 4]);
// console.log(s);

// //用Set 数组去重
// let arr1 = [1, 1, 2, 2, 3, 3];
// let s = new Set(arr1);
// let arr2 = [...s];
// console.log(arr2);

//Set方法
// const s = new Set();
// s.add("tim")
// s.add("sam")
// s.add("big")
// console.log(s);
// let r=s.delete("sam")
// console.log(s);
// console.log(r);
// r=s.has("tim");
// console.log(r);
// r=s.has("wow");
// console.log(r);
// s.clear();
// console.log(s);

const s = new Set([1, 2, 3, 4, 5]);
s.forEach((items) => {
    console.log(items);
});
