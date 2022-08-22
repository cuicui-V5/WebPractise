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

            console.log(kw);
            // getSuggestList(kw);
        }, 200);
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
        },
    });
}
// 生成提示框
function showList(data) {
    let html = template("tpl_suggest", data);
    $(".suggest").show();
    $(".suggest").html(html);
}
