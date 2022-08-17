let obj = {
    name: "tim",
    sex: "male",
};
let json = JSON.stringify(obj);
console.log(json);

let obj2 = JSON.parse(json);
console.log(obj2);
