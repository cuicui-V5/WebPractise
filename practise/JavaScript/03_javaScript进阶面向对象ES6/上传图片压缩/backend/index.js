import express from "express";
import multer from "multer";
import cors from "cors";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname +
                "-" +
                Date.now() +
                "." +
                file.originalname.split(".")[
                    file.originalname.split(".").length - 1
                ],
        );
    },
});
const upload = multer({ dest: "uploads/", storage });

const app = express();
app.use(cors());

app.post("/upload", upload.single("img"), function (req, res) {
    // req.file 是 `avatar` 文件的信息
    console.log(req.file);
    // req.body 将具有文本域数据，如果存在的话
    console.log(req.body);
    res.send({
        msg: "ok",
    });
});

app.post(
    "/photos/upload",
    upload.array("photos", 12),
    function (req, res, next) {
        // req.files 是 `photos` 文件数组的信息
        // req.body 将具有文本域数据，如果存在的话
    },
);

app.get("/", function (res, req) {
    console.log("get");
    req.send("hello");
});

app.listen(8888, "127.0.0.1", () => {
    console.log("server started at http://127.0.0.1:8888");
});
