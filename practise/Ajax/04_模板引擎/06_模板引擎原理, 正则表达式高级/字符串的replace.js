// let reg = /{{[a-zA-Z]+}}/g;//无分组
let reg = /{{([a-zA-Z]+)}}/g;
let str = "<div>{{uname}}</div><div>{{sex}}</div>";

let data = {
    uname: "tim",
    sex: "male",
};

{
    let res = true;
    while (res) {
        res = reg.exec(str);
        if (res === null) {
            return;
        }
        let newStr = str.replace(res[0], data[res[1]]);
        console.log(str);
        console.log(newStr);
    }
}
