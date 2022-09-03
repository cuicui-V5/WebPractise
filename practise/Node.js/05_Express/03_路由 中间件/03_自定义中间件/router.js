const express = require("express");
const router = express.Router();
const qs = require("querystring");
let str = "";
const mw = function (req, res, next) {
    req.on("data", chunk => {
        console.log(chunk);
        str += chunk;
    });
    req.on("end", () => {
        console.log(qs.parse(str));
        str = "";
    });
    next();
};

router.get("/", mw, function (req, res) {
    res.send("hello world");
});
router.post("/", mw, function (req, res) {
    res.send("hello world");
});

module.exports = router;
