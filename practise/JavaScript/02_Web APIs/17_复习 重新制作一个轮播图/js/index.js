window.addEventListener("load", function () {
    //获取元素
    /**
     * @type {HTMLElement} img
     */
    var img = document.querySelector(".carousel .img");
    var btn_left = document.querySelector(".carousel .ctrl .leftBtn");
    var btn_right = document.querySelector(".carousel .ctrl .rightBtn");
    /**
     * @type {HTMLElement} dots
     */
    var dots = document.querySelector(".carousel .ctrl .dots");
    var index = 0;
    var tag = false; //节流阀

    var imgSum = img.children.length;

    //复制第一张图片放到最后
    var cloneImg = img.children[0].cloneNode(true);
    img.appendChild(cloneImg);

    //生成小圆点
    for (var i = 0; i < imgSum - 1; i++) {
        var dot = dots.children[0].cloneNode(true);
        dots.appendChild(dot);
    }

    for (var i = 0; i < dots.children.length; i++) {
        dots.children[i].setAttribute("index", i);
        dots.children[i].addEventListener("click", dotsClick);
    }
    dots.children[0].className="dot current";
    function dotsClick() {
        console.log(this.getAttribute("index"));
        index = this.getAttribute("index");
        animate(img, -index * 200);
    }

    btn_right.addEventListener("click", function () {
        if (tag) {
        } else {
            tag = true;
            index++;
            if (index == imgSum + 1) {
                img.style.left = 0 + "px";
                index = 1;
                animate(img, -index * 200, callback);
            } else {
                animate(img, -index * 200, callback);
            }
            updateDots();
        }
    });
    btn_left.addEventListener("click", function () {
        if (tag) {
        } else {
            tag = true;
            index--;
            if (index == -1) {
                //如果在第一张图还点左边按钮
                img.style.left = -imgSum * 200 + "px";
                index = imgSum - 1;

                animate(img, -index * 200, callback);
            } else {
                animate(img, -index * 200, callback);
            }
            updateDots();
        }
    });
    function callback() {
        tag = false;
    }

    function updateDots() {
        for (var i = 0; i < dots.children.length; i++) {
            dots.children[i].className = "dot";
        }
        dots.children[index].className = "dot current";
    }
});
