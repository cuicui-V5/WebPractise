let arr = [
    {
        name: "tim",
        age: 18,
    },
    {
        name: "jack",
        age: 10,
    },
];
console.log(arr.find(item=>item.name=="jack"));
console.log(arr.findIndex(item=>item.name=="jack"));