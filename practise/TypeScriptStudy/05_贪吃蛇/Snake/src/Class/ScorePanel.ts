export class ScorePanel {
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;
    private score = 0;
    private level = 1;
    constructor() {
        this.scoreEle = document.querySelector(".score-panel .score span")!;
        this.levelEle = document.querySelector(".score-panel .level span")!;
        this.scoreEle.innerText = this.score.toString();
        this.levelEle.innerText = this.level.toString();
    }

    addScore(): void {
        this.scoreEle.innerText = (++this.score).toString();
        if (this.score % 10 == 0) {
            this.addLevel();
        }
    }
    addLevel(): void {
        if (this.level < 10) {
            this.levelEle.innerText = (++this.level).toString();
        }
    }
}
