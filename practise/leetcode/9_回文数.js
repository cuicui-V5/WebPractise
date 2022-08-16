/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false; //如果小于零, 那么一定不是回文数
    }

    let arr = x.toString().split("");
    arr.reverse();
    if (arr.join("") == x) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome(3213212));
