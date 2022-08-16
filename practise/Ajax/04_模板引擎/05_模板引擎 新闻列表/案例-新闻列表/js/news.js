let newsList = document.querySelector("#news-list");

// 获取数据
$.ajax({
    type: "get",
    url: "http://www.liulongbin.top:3006/api/news",
    success: function (response) {
        if (response.status == 200) {
            console.log(response.data);
            let arr = response.data;
            let html = template("tpl_News", response);
            newsList.insertAdjacentHTML("beforeend", html);
            // console.log(html);
        } else {
            alert("获取数据失败!");
        }
    },
});
/**
 *
 * @param {Date} val
 * @returns {string}
 */
template.defaults.imports.timeProcess = function (val) {
    console.log(typeof val);
    console.log(val);
    let date = new Date(val);
    console.log(date);
    return `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(
        date.getDate()
    )}  ${zero(date.getHours())}:${zero(date.getMinutes())} `;
};

function zero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}
