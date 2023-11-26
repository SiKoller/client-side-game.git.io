
/**
 * This is the super class of all Levels 
 * to make sure the functions loadLevel and create Prompt exists
 * because in javascript are no interfaces.
 * And do provice functions which make it easier to load levels.
 */
export default class Level {

    constructor(game) {
        this.game = game;
        this.prompts = new Array();
        this.createPrompts();
    }

    nextPrompt = () => {
        this.game.nextPrompt();
    }
    
    setLevel = (levelName = null, promptGroupIndex = 0, promptIndex = 0) => {
        this.game.setLevel(levelName, promptGroupIndex,promptIndex);
    }

    setPromptGroup = (promptGroupIndex = null) => {
        this.game.setPromptGroup(promptGroupIndex);
    }

    setPrompt = (prompt = null) => {
        this.game.setPrompt(prompt);
    }

    loadLevel = () => {
        throw new Error("Method loadLevel must be implemented")
    }

    createPrompts() {
        throw new Error("Method createPrompts must be implemented")
    }

}