export class Snake {
    // 蛇头
    head: HTMLElement;
    bodies: HTMLCollection;
    snakeEle: HTMLDivElement;
    constructor() {
        this.snakeEle = document.querySelector(".snake")!;
        this.head = this.snakeEle.querySelector("div")!;
        this.bodies = this.snakeEle.getElementsByTagName("div");
    }
}
