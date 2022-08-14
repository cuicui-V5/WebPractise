let cmtList = document.querySelector(".list-group");
/**
 * @type{HTMLFormElement} form
 */
let form = document.querySelector(".sendCmt");
function getCmt() {
    cmtList.innerHTML = "";
    $.ajax({
        type: "get",
        url: "http://www.liulongbin.top:3006/api/cmtlist",
        success: function (response) {
            console.log(response);
            if (response.status == 200) {
                response.data.forEach((element) => {
                    console.log(element);
                    // element: "id": 34,
                    //          "username": "丫丫",
                    //          "content": "123456",
                    //          "time": "2022-08-14 12:44:32"
                    let { id, username, content, time } = element;
                    let html = `<li class="list-group-item">
                                    <span class="badge" style="background-color: #eeac4e">评论时间: ${time}</span>
                                    <span class="badge" style="background-color: #5abfdb">评论人: ${username}</span>
                                    ${content}
                                </li>`;
                    cmtList.insertAdjacentHTML("beforeend", html);
                });
            }
        },
    });
}
getCmt();

$(".sendCmt").on("submit", function (e) {
    e.preventDefault();
    console.log($(".sendCmt").serialize());
    $.ajax({
        type: "post",
        url: "http://www.liulongbin.top:3006/api/addcmt",
        data: $(".sendCmt").serialize(),
        success: function (response) {
            console.log(response);
            getCmt();
            form.reset();
        },
    });
});
