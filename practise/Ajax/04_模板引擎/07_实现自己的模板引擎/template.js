function template(id, data) {
    let str = document.getElementById(id).innerHTML;
    let regExp = /{{\s*([a-zA-Z]+)\s*}}/;
    let res = null;
    while ((res = regExp.exec(str))) {
        str = str.replace(res[0], data[res[1]]);
        console.log(res);
    }
    return str; //返回处理好的字符串
}
