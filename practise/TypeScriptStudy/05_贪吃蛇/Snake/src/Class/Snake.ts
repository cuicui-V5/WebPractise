import { Position } from "./../interface/interface";
export class Snake {
    // 蛇头
    head: HTMLElement;
    // 身体
    bodies: HTMLCollection;
    // 整个蛇
    snakeEle: HTMLDivElement;
    gameOverMask: HTMLElement;
    ctrl: HTMLElement;
    rank: HTMLElement;
    constructor() {
        this.snakeEle = document.querySelector(".snake")!;
        this.head = this.snakeEle.querySelector("div")!;
        this.bodies = this.snakeEle.getElementsByTagName("div");
        this.gameOverMask = document.querySelector(".gameOverMask")!;
        this.ctrl = document.querySelector(".ctrl")!;
        this.rank = document.querySelector(".rank")!;
    }

    getPos(): Position {
        const pos = {
            x: this.head.offsetLeft,
            y: this.head.offsetTop,
        };
        return pos;
    }
    setPos(pos: Position): void {
        this.moveBody();
        this.head.style.left = pos.x + "px";
        this.head.style.top = pos.y + "px";
        this.checkBody();
    }
    addBody(): void {
        this.bodies[this.bodies.length - 1].insertAdjacentHTML(
            "afterend",
            "<div></div>",
        );
    }
    moveBody(): void {
        // 后一个身体的位置等于前一个身体的位置, 从后往前依次进行
        // console.log(this.bodies);

        for (let index = this.bodies.length - 1; index > 0; index--) {
            const element = this.bodies[index] as HTMLElement;
            // console.log(element);

            element.style.left = (
                this.bodies[index - 1] as HTMLElement
            ).style.left;
            element.style.top = (
                this.bodies[index - 1] as HTMLElement
            ).style.top;
        }
    }

    // 身体碰撞监测
    checkBody(): void {
        if (this.bodies.length > 1) {
            for (let index = 1; index < this.bodies.length; index++) {
                const element = this.bodies[index] as HTMLElement;
                if (
                    element.offsetLeft == this.head.offsetLeft &&
                    element.offsetTop == this.head.offsetTop
                ) {
                    alert("你把自己给吃了");
                    this.gameOver();
                }
            }
        }
    }
    gameOver() {
        this.gameOverMask.style.display = "block";
        this.ctrl.style.display = "none";
        this.rank.style.display = "block";
    }
}
