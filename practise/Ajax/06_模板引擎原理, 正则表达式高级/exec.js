let reg = new RegExp();
reg = /o/g;
let str = "hello world";
{
    let res = true;
    while (res) {
        res = reg.exec(str);
        console.log(res);
    }

}
