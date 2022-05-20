window.addEventListener("load", function () {
    var carousel = document.querySelector(".carousel");
    var control = document.querySelector(".control");
    var btn_left = document.querySelector(".btn_left");
    var btn_right = document.querySelector(".btn_right");
    var btn_bottom = document.querySelector(".btn_bottom");
    var images = document.querySelector(".images");

    // 复制第一个元素
    images.appendChild(images.children[0].cloneNode(true));
    var index = 0; //当前是第几张图片
    var width = images.children[0].offsetWidth;
    var imgSum = images.children.length; //共有几张图片
    //控制图片前进后退的函数, 参数为正负数, 正数前进一张, 负数后退一张
    function carMoveStep(tag) {
        //假如原地移动, 那什么都不做
        v = (index + tag) * -width;
        tag > 0 ? index++ : index--;
        console.log(v);
        if (index == imgSum) {
            //最后一张图片点击就会跳到第一张图片并且前进一张
            images.style.left = "0px";
            animate(images, -width);
            index = 1;
        } else if (index < 0) {
            //第一张图片点击就会跳到最后一张图片并后退一张
            images.style.left = (imgSum - 1) * -width + "px";
            animate(images, (imgSum - 2) * -width);
            index = imgSum-1;
        } else {
            animate(images, v);
        }

        //更新小圆圈按钮的选中状态
        //先取消所有的current
        for (var i = 0; i < btn_bottom.children.length; i++) {
            btn_bottom.children[i].className = "";
        }
        //如果是实际上的最后一张, 第一个圆点设为为current
        if (index == imgSum-1) {
            btn_bottom.children[0].className = "current";
        } else {
            btn_bottom.children[index].className = "current";
        }

        console.log("index=" + index);
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
    // 控制前进后退按钮的显示隐藏
    carousel.addEventListener("mouseenter", function () {
        control.style.visibility = "visible";
    });
    carousel.addEventListener("mouseleave", function () {
        control.style.visibility = "hidden";
    });

    //前进后退按钮区域
    btn_right.addEventListener("click", function () {
        carMoveStep(1);
    });
    btn_left.addEventListener("click", function () {
        carMoveStep(-1);
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
});
