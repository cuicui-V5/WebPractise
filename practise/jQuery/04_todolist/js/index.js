//预设对象
let data = {
    doing: ["吃饭", "睡觉", "打豆豆"],
    done: ["玩游戏", "做作业", "喝水"],
};
//如果存在. 就覆盖默认对象
if (localStorage.getItem("data")) {
    //读取到本地数据
    console.log("读取到本地数据");
    data = JSON.parse(localStorage.getItem("data"));
} else {
    console.log("没有读取到本地数据 加载默认数据");
}

//获取元素
let input = document.querySelector(".tittleTab input");
let doing = document.querySelector(".main .doing");
let done = document.querySelector(".main .done");

function init() {
    console.log(data);
    //将data存入本地存储
    localStorage.setItem("data", JSON.stringify(data));

    //初始化 删除原有的，载入data中的
    doing.innerHTML = "";
    done.innerHTML = "";
    let index = 0;
    data.doing.forEach(function (item) {
        //生成新条目
        let html = `<div class="Items" index=${index++}>
                    <input type="checkbox" name="" id="" class="check" />
                    <div class="tittle">${item}</div>
                    <div class="close">X</div>
                </div>`;
        doing.insertAdjacentHTML("beforeend", html);
    });
    index = 0;
    data.done.forEach(function (item) {
        //生成新条目
        let html = `<div class="Items" index=${index++}>
                    <input type="checkbox" name="" id="" class="check" checked/>
                    <div class="tittle">${item}</div>
                    <div class="close">X</div>
                </div>`;
        done.insertAdjacentHTML("beforeend", html);
    });
    //获取所有复选框和关闭按钮 绑定事件
    let checkBoxs = document.querySelectorAll(".Items .check");
    let closees = document.querySelectorAll(".Items .close");
    // console.log(checkBoxs);
    // console.log(closees);
    checkBoxs.forEach(function (item) {
        item.addEventListener("change", function (e) {
            let index = this.parentNode.getAttribute("index");
            if (this.checked) {
                data.doing.splice(index, 1);
                data.done.push(this.nextElementSibling.innerHTML);
            } else {
                data.done.splice(index, 1);
                data.doing.push(this.nextElementSibling.innerHTML);
            }
            init();
        });
    });
    closees.forEach((item) => {
        item.addEventListener("click", function (e) {
            let index = this.parentNode.getAttribute("index");
            if (this.previousElementSibling.previousElementSibling.checked) {
                data.done.splice(index, 1);
            } else {
                data.doing.splice(index, 1);
            }
            init();
        });
    });
}
init();
input.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && input.value != "") {
        data.doing.push(input.value);
        init();
    }
});
