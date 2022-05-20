window.addEventListener("load", function () {
    var carousel = document.querySelector(".carousel");
    var control = document.querySelector(".control");
    var btn_left = document.querySelector(".btn_left");
    var btn_right = document.querySelector(".btn_right");
    var btn_bottom = document.querySelector(".btn_bottom");
    var images = document.querySelector(".images");

    var imgSum = images.children.length; //共有几张图片
    console.log("去掉复制的共有" + imgSum + "张图");
    // 复制第一个元素
    images.appendChild(images.children[0].cloneNode(true));
    var index = 0; //当前是第几张图片
    var width = images.children[0].offsetWidth;
    var distance = 0;
    // 控制前进后退按钮的显示隐藏
    carousel.addEventListener("mouseenter", function () {
        //取消自动切换
        clearInterval(autoSwitch);
        // 显示控制按钮
        control.style.visibility = "visible";
    });
    carousel.addEventListener("mouseleave", function () {
        //设置定时器
        var autoSwitch = setInterval(function () {
            btn_right.click();
        }, 5000);
        //隐蔽控制按钮
        control.style.visibility = "hidden";
    });
    var flag = true;
    //前进后退按钮区域
    btn_right.addEventListener("click", function () {
        if (flag) {
            flag = false; //关闭节流阀
            //前进
            //如果是最后一张图片, 那么进行处理
            if (index == imgSum) {
                index = 0;
                images.style.left = "0px";
            }

            index++;
            distance = index * -width;
            animate(images, distance, function () {
                flag = true;
            });

            //设置小圆点的样式

            for (var i = 0; i < btn_bottom.children.length; i++) {
                btn_bottom.children[i].className = "";
            }
            if (index == imgSum) {
                btn_bottom.children[0].className = "current";
            } else {
                btn_bottom.children[index].className = "current";
            }
            console.log(index);
        }
    });
    btn_left.addEventListener("click", function () {
        if (flag) {
            flag = false; //关闭节流阀
            //后退
            //如果现在是第一张, 那么跳到最后一张
            if (index == 0) {
                index = imgSum;
                images.style.left = imgSum * -width + "px";
            }
            index--;
            distance = index * -width;
            animate(images, distance, function () {
                flag = true;
            });

            //设置小圆点的样式
            for (var i = 0; i < btn_bottom.children.length; i++) {
                btn_bottom.children[i].className = "";
            }
            if (index == imgSum) {
                btn_bottom.children[0].className = "current";
            } else {
                btn_bottom.children[index].className = "current";
            }

            console.log(index);
        }
    });

    //生成下方小圆点按钮
    for (var i = 0; i < images.children.length - 1; i++) {
        var bubb = document.createElement("li");
        if (i == 0) {
            //第一个设为默认
            bubb.className = "current";
        }
        //添加属性
        bubb.setAttribute("index", i);
        //绑定事件
        bubb.addEventListener("click", function () {
            carMove(this.getAttribute("index"));
            console.log("你点击了小圆圈按钮" + this.getAttribute("index"));
        });
        btn_bottom.appendChild(bubb);
    }

    //控制图片移动函数, 参数为多少就移动到第几张图
    function carMove(moveTo) {
        v = moveTo * -width;

        animate(images, v);
        index = moveTo;
        //更新小圆圈按钮的选中状态
        for (var i = 0; i < btn_bottom.children.length; i++) {
            btn_bottom.children[i].className = "";
        }
        btn_bottom.children[index].className = "current";

        console.log("index=" + index);
    }
    //自动切换图片
    var autoSwitch = setInterval(function () {
        btn_right.click();
    }, 5000);
    //可以用左右方向键控制切换
    document.addEventListener("keydown", function (e) {
        if (e.key == "ArrowLeft") {
            btn_left.click();
        } else if (e.key == "ArrowRight") {
            btn_right.click();
        }
    });
});
