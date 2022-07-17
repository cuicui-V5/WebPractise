/**
 *
 * @param {HTMLElement} ele
 * @param {Number} targetPosion
 * @param {Function} callback
 */
function animate(ele, targetPosion, callback) {
    //动画函数实现 先获取当前位置, 然后移动 (目标位置-当前位置)/10 到达目标位置结束,
    clearInterval(timer);

    var timer = setInterval(move, 10);

    function move() {
        var postion = ele.offsetLeft;
        var steps = (targetPosion - postion) / 10;
        if (steps > 0) {
            steps = Math.ceil(steps);
        } else {
            steps = Math.floor(steps);
        }
        ele.style.left = `${postion + steps}px`;
        if (postion == targetPosion) {
            clearInterval(timer);
            callback && callback();
            console.log("callback!!!");
        }
    }
}
