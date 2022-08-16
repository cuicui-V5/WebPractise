// let reg = /{{[a-zA-Z]+}}/g;//无分组
let reg = /{{([a-zA-Z]+)}}/g;
let str = "<div>{{name}}</div><div>{{sex}}</div>";
{
    let res = true;
    while (res) {
        res = reg.exec(str);
        console.log(res);
    }
}
