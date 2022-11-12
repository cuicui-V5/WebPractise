import { Snake } from "./Class/Snake";
import { GameController } from "./Class/GameController";
import "./index.less";
import axios from "axios";

const rankShowArea: HTMLElement = document.querySelector(".rankShowArea")!;

const submitBtn: HTMLElement = document.querySelector(".submitBtn")!;

const user: HTMLInputElement = document.querySelector("#user")!;
let gameController: GameController;
//请求排行榜数据
async function getRank() {
    const res = await axios.get("http://117.78.0.131:8080/snake/rank");
    console.log(res);

    const rank = res.data.rank;

    let lis = "";
    for (let index = 0; index < rank.length; index++) {
        const element = rank[index];
        let date = new Date(Number(element.time));

        const li = `<li> NO.${index + 1}  -  ${element.user}  - 得分: ${
            element.score
        }  -  ${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}: ${
            date.getMinutes() + 1
        }</li>`;
        lis += li;
    }
    rankShowArea.innerHTML = "";
    rankShowArea.insertAdjacentHTML("beforeend", lis);
}

document.querySelector(".startBtn")?.addEventListener("click", () => {
    gameController = new GameController();
    (document.querySelector(".startMask") as HTMLElement).style.display =
        "none";
});
document.querySelector(".gameOverBtn")?.addEventListener("click", () => {
    window.location.reload();
});

submitBtn.addEventListener("click", submit);

async function submit() {
    const res = await axios({
        method: "post",
        url: "http://117.78.0.131:8080/snake/submit",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
            user: user.value,
            score: gameController.scorePanel.score.toString(),
            time: new Date().getTime(),
        },
    });

    console.log(res);
    alert("提交成功");
    getRank();
}

window.onload = function () {
    var lastTouchEnd = 0;
    document.addEventListener("touchstart", function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener(
        "touchend",
        function (event) {
            var now = new Date().getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        },
        false,
    );
    document.addEventListener("gesturestart", function (event) {
        event.preventDefault();
    });
    document.addEventListener("dblclick", function (event) {
        event.preventDefault();
    });
};
getRank();
