import { Snake } from "./Class/Snake";
import { GameController } from "./Class/GameController";
import "./index.less";

const gameController = new GameController();

document.querySelector(".btn1")?.addEventListener("click", () => {
    console.log(gameController.snake.getPos());
});
document.querySelector(".btn2")?.addEventListener("click", () => {
    gameController.snake.moveBody();
});
