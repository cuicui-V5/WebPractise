import { Snake } from "./Class/Snake";
import { GameController } from "./Class/GameController";
import "./index.less";

document.querySelector(".startBtn")?.addEventListener("click", () => {
    const gameController = new GameController();
    (document.querySelector(".startMask") as HTMLElement).style.display =
        "none";
});
document.querySelector(".gameOverBtn")?.addEventListener("click", () => {
    window.location.reload();
});
