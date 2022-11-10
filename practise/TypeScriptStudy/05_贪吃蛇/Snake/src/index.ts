import "./index.less";
import { Food } from "./Class/Food";
import { ScorePanel } from "./Class/ScorePanel";
import { Snake } from "./Class/Snake";
const food = new Food();
const scorePanel = new ScorePanel();
const snake = new Snake();
console.log(snake);

document.querySelector(".btn1")?.addEventListener("click", () => {
    food.randomBorn();
});
document.querySelector(".btn2")?.addEventListener("click", () => {
    scorePanel.addScore();
});
