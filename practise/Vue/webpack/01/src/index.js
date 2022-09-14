import $ from "jquery";
import "./index.css";
import "./index.less";
import img from "./img/Snipaste_2022-09-14_11-47-34.png";
$(function () {
    $("li:odd").css("background-color", "pink");
    $("li:even").css("background-color", "white");
    $("img").attr("src", img);
    console.log(img);
});
