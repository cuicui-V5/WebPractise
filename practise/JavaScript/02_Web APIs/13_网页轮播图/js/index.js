window.addEventListener("load", function () {
    var btn_left = document.querySelector(".btn_left");
    var btn_right = document.querySelector(".btn_right");
    var images = document.querySelector(".images");
    //给image中的li添加自定义属性
    for (var i = 0; i < images.children.length; i++) {
        images.children[i].setAttribute("index", i);
    }
    images.children[images.children.length - 1].setAttribute("index", 0);
    var index = 0;
    //切换图片函数, 参数为跳转到第几个图片
    async function carMove(moveTo) {


    }
    btn_right.addEventListener("click", function () {
        carMove(++index);
    });
    btn_left.addEventListener("click", function () {
        carMove(--index);
    });

    function newFunction() {
        images.style.left = "0px";
    }
});
