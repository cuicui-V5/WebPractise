/**
 *
 * @param {HTMLElement} obj
 * @param {HTMLElement} target
 */

function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(move, 15);
    function move() {
        var box_x = obj.offsetLeft; //获取现在的位置
        var step = (target - box_x) / 10; //计算步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //步长取整
        obj.style.left = box_x + step + "px"; //进行移动
        //到达位置取消定时器
        if (box_x == target) {
            clearInterval(obj.timer);
            callback()
        }
    }

}
