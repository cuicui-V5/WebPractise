export class ScorePanel {
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;
    private score = 0;
    public level = 1;
    constructor() {
        this.scoreEle = document.querySelector(".score-panel .score span")!;
        this.levelEle = document.querySelector(".score-panel .level span")!;
        this.scoreEle.innerText = this.score.toString();
        this.levelEle.innerText = this.level.toString();
    }

    addScore(): void {
        this.scoreEle.innerText = (this.score += 2).toString();
        if (this.score % 4 == 0) {
            this.addLevel();
        }
    }
    private addLevel(): void {
        if (this.level < 20) {
            this.levelEle.innerText = (++this.level).toString();
        }
    }
}
