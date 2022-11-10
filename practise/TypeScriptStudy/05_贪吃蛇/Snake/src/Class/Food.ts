import { Position } from "../interface/interface";

// 食物类
export class Food {
    // 代表蛇
    private element: HTMLElement;
    constructor() {
        this.element = document.querySelector(".food")!;
    }

    // 报告自身位置方法
    getPosition(): Position {
        const pos: Position = {
            x: this.element.offsetLeft,
            y: this.element.offsetTop,
        };
        console.log(pos);

        return pos;
    }
    // 随机出生的方法
    randomBorn(): void {
        const x = Math.round(Math.random() * 29) * 10;
        const y = Math.round(Math.random() * 29) * 10;

        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        this.getPosition();
    }
}
