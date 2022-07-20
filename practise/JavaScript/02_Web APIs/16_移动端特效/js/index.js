window.addEventListener("load", function () {
    //先获取元素
    /**
     * @type {HTMLElement} imgs
     */
    var imgs = document.querySelector(".focus .imgs"); //图片
    /**
     * @type {HTMLElement} ctrl
     */
    var ctrl = document.querySelector(".focus .ctrl"); //小圆点
    //现在是第几张图片
    var index = 0;

    var startX, moveX, boxX;
    timer = setInterval(function () {
        index++;
        console.log(index);

        imgs.style.transition = "all 0.3s";
        imgs.style.transform = `translateX(${-400 * index}px)`;
    }, 1000);
    //如果到了最后一张, 不带动画的跳到第一张
    //必须要过度播放完毕之后判断

    imgs.addEventListener("transitionend", function () {
        if (index > 2) {
            imgs.style.transition = "none";
            imgs.style.transform = `translateX(0px)`;
            index = 0;
        }

        if (index < 0) {
            imgs.style.transition = "none";
            imgs.style.transform = `translateX(-800px)`;
            index = 2;
        }
        //更新小圆点
        ctrl.querySelector(".current").classList.remove("current");
        ctrl.children[index].classList.add("current");
    });

    //触摸事件
    imgs.addEventListener("touchstart", function (e) {
        //获取触摸初始位置
        startX = e.touches[0].pageX;
        clearInterval(timer);
    });

    imgs.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].pageX - startX;
        imgs.style.transition = "none";
        imgs.style.transform = `translateX(${-index * 400 + moveX}px)`;

        //阻止默认操作
        e.preventDefault();
    });
    imgs.addEventListener("touchend", function (e) {
        if (Math.abs(moveX) > 100) {
            if (moveX > 0) {
                //上一张
                index--;
            } else {
                index++;
            }
        }

        imgs.style.transition = "all 0.3s";
        imgs.style.transform = `translateX(${-400 * index}px)`;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            console.log(index);

            imgs.style.transition = "all 0.3s";
            imgs.style.transform = `translateX(${-400 * index}px)`;
        }, 1000);
    });
});
