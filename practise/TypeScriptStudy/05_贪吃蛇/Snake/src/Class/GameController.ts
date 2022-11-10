import { Snake } from "./Snake";
import { ScorePanel } from "./ScorePanel";
import { Food } from "./Food";
export class GameController {
    isAlive: boolean = true;
    direction: string = "arrowRight";
    timer: any;
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();

        this.init();
    }
    // 绑定键盘控制的事件
    init(): void {
        document.addEventListener("keydown", this.kbdHandler.bind(this));
    }
    kbdHandler(e: KeyboardEvent): void {
        if (
            [
                "w",
                "a",
                "s",
                "d",
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
            ].includes(e.key)
        ) {
            this.direction = e.key;
        }
        console.log(this.direction);
        this.snakeMove();
    }
    snakeMove() {
        clearTimeout(this.timer);
        let pos = this.snake.getPos();
        console.log(pos);

        switch (this.direction) {
            case "w":
            case "ArrowUp":
                pos.y -= 10;
                break;
            case "a":
            case "ArrowLeft":
                pos.x -= 10;
                break;
            case "s":
            case "ArrowDown":
                pos.y += 10;
                break;
            case "d":
            case "ArrowRight":
                pos.x += 10;
                break;
        }
        // 出界检测
        if (pos.x < 0) {
            pos.x = 290;
        }
        if (pos.y < 0) {
            pos.y = 290;
        }
        if (pos.x > 290) {
            pos.x = 0;
        }
        if (pos.y > 290) {
            pos.y = 0;
        }

        this.snake.setPos(pos);

        // 得分机制
        if (
            pos.x === this.food.getPosition().x &&
            pos.y === this.food.getPosition().y
        ) {
            this.scorePanel.addScore();
            this.food.randomBorn();
            this.snake.addBody();
        }

        this.snake.moveBody();
        if (this.isAlive) {
            this.timer = setTimeout(() => {
                this.snakeMove();
            }, 200 - this.scorePanel.level * 20);
        }
    }
}
