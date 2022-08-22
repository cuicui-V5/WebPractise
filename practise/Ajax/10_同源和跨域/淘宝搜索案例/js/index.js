// 定义缓存

let suggestCache = {}

$(function () {
    $(".suggest").hide();
    let timer;

    $("#ipt").on("keyup", function () {
        //防抖
        clearTimeout(timer);
        timer = setTimeout(() => {
            let kw = $(this).val().trim();

            if (kw.length <= 0) {
                $(".suggest").hide();
                return;
            }
            console.log(`==========查询${kw}=======`);
            //先判断kw是否位于缓存中, 如果有缓存, 直接读取
            //如果没有, 再发送请求
            console.log(suggestCache);
            if (Object.prototype.hasOwnProperty.call(suggestCache, kw)) {
                console.log("缓存中找到了该关键字, 直接读取");
                showList(suggestCache[kw]); //如果缓存中有数据直接取数据加载
            } else {
                console.log("缓存中没有该关键字, 请求远程服务器"); //调用获取
                getSuggestList(kw);
            }
        }, 400);
    });
});
//获取data
function getSuggestList(kw) {
    $.ajax({
        type: "get",
        url: "https://suggest.taobao.com/sug?q=" + kw,
        dataType: "jsonp",
        success: function (response) {
            console.log(response);
            showList(response);
            // 给缓存添加属性
            suggestCache[kw] = response;
        },
    });
}
// 生成提示框
function showList(data) {
    let html = template("tpl_suggest", data);
    $(".suggest").show();
    $(".suggest").html(html);
}
