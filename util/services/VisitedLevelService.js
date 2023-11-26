export default class VisitedLevelService {
    constructor(game) {
        this.game = game;
        this.visitedLevel = new Set();
    }

    async getVisitedLevelButton(levelName) {
        const button = document.createElement("button");
        button.onclick = () => {
            this.game.setLevel(levelName);
        }
        button.textContent = levelName;

        return button;
    }

    async addVisitedLevelToMenue(levelName){
        if(this.visitedLevel.has(levelName)){
            return;
        }
        this.visitedLevel.add(levelName);

        const button = await this.getVisitedLevelButton(levelName);
        $("#myDropdown").append(button);
    }
}


