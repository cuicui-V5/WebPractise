// 导入mysql
const mysql = require("mysql");

// 建立连接
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "my_db_01",
});
//查询数据
// db.query("select * from users", (err, res) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(res);
// });
//插入数据
// const user = {
//     name: "guairen122",
//     password: "123",
// };
// const queryStr = "insert into users (username,password) values(?,?)";
// db.query(queryStr, [user.name, user.password], (err, res) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     if (res.affectedRows === 1) {
//         console.log("写入成功");
//         console.log(Date.now());
//     }
// });

// 更新数据
// const user = {
//     id: 1,
//     name: "tim",
//     password: "12aaa",
// };
// const queryStr = "update users set username=?,password=? where id=?";
// db.query(queryStr, [user.name, user.password, user.id], function (err, res) {
//     if (err) {
//         return console.log(err.message);
//     }
//     if (res.affectedRows === 1) {
//         console.log("更新成功");
//     }
// });
// 删除数据
const queryStr = "delete from users where id=?";
db.query(queryStr, 16, function (err, res) {
    if (err) {
        console.log(err.message);
        return;
    }
    if (res.affectedRows === 1) {
        console.log("删除成功");
    }
});
