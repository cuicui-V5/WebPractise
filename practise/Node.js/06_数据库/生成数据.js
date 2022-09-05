const { faker } = require("@faker-js/faker");

const mysql = require("mysql");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "my_db_01",
});

const queryStr = "insert into users(username,password) values(?,?)";

for (let index = 0; index < 1000; index++) {
    db.query(queryStr, [faker.name.fullName(), faker.random.alpha(6)]);
}
