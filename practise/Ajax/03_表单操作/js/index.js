let tbody = document.querySelector("tbody");
let btn_addBook = document.querySelector(".btn_addBook");
let iptBookname = document.querySelector("#iptBookname");
let iptAuthor = document.querySelector("#iptAuthor");
let iptPublisher = document.querySelector("#iptPublisher");
function getBooks() {
    //发起Ajax请求
    $.ajax({
        type: "get",
        url: "http://www.liulongbin.top:3006/api/getbooks",
        success: function (response) {
            tbody.innerHTML = "";
            if (response.status != 200) {
                alert("读取出错");
            } else {
                //遍历添加数据, 添加删除按钮
                response.data.forEach((element) => {
                    let { id, bookname, author, publisher } = element;
                    let html = `
                                <tr>
                                    <td class="id">${id}</td>
                                    <td>${bookname}</td>
                                    <td>${author}</td>
                                    <td>${publisher}</td>
                                    <td><button type="button" class="btn btn-danger btn-del">删除图书</button></td>

                                </tr>
                                `;
                    tbody.insertAdjacentHTML("beforeend", html);
                });
            }
            // 给删除按钮绑定事件
            $(".btn-del").on("click", function (param) {
                console.log($(this).parent().siblings(".id").text());
                delBook($(this).parent().siblings(".id").text());
                getBooks();
            });
        },
    });
}
function delBook(del_id) {
    $.ajax({
        type: "get",
        url: "http://www.liulongbin.top:3006/api/delbook",
        data: {
            id: del_id,
        },
        success: function (response) {
            console.log(response);
        },
    });
}

function addBook(bookname, author, publisher) {
    $.ajax({
        type: "post",
        url: "http://www.liulongbin.top:3006/api/addbook",
        data: {
            bookname: bookname,
            author: author,
            publisher: publisher,
        },
        success: function (response) {
            console.log(response);
            getBooks();
        },
    });
}
getBooks();
$(btn_addBook).on("click", function () {
    console.log("开始添加图书");
    addBook(iptBookname.value, iptAuthor.value, iptPublisher.value);
});
