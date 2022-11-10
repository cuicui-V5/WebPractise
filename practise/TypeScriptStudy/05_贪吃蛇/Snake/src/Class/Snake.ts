import { Position } from "./../interface/interface";
export class Snake {
    // 蛇头
    head: HTMLElement;
    // 身体
    bodies: any;
    // 整个蛇
    snakeEle: HTMLDivElement;
    constructor() {
        this.snakeEle = document.querySelector(".snake")!;
        this.head = this.snakeEle.querySelector("div")!;
        this.bodies = this.snakeEle.getElementsByTagName("div");
    }

    getPos(): Position {
        const pos = {
            x: this.head.offsetLeft,
            y: this.head.offsetTop,
        };
        return pos;
    }
    setPos(pos: Position): void {
        this.head.style.left = pos.x + "px";
        this.head.style.top = pos.y + "px";
    }
    addBody(): void {
        this.bodies[this.bodies.length - 1].insertAdjacentHTML(
            "afterend",
            "<div></div>",
        );
    }
    moveBody(): void {
        // 后一个身体的位置等于前一个身体的位置, 从后往前依次进行
        console.log(this.bodies);

        for (let index = this.bodies.length - 1; index > 0; index--) {
            const element: any = this.bodies[index];
            // console.log(element);

            element.style.left = this.bodies[index - 1].style.left;
            element.style.top = this.bodies[index - 1].style.top;
        }
    }
}
