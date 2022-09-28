import fs from "fs";

fs.readFile("./txt/1.txt", "utf8", (err, res) => {
    if (err) {
        console.log(err.message);
    }
    console.log(res);
    fs.readFile("./txt/2.txt", "utf8", (err, res) => {
        if (err) {
            console.log(err.message);
        }
        console.log(res);

        fs.readFile("./txt/3.txt", "utf8", (err, res) => {
            if (err) {
                console.log(err.message);
            }
            console.log(res);
        });
    });
});
