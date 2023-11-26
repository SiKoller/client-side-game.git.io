import { promptText, promptChoices, createNextPromptButton } from "../handler/promptUtil.js";


export default class DialogueService {
  constructor(game) {
    this.game = game;
  }

  async promptDialogue() {

    const prompt = document.querySelector("#prompt");

    const choicesElement = prompt.querySelector("#choices");
    choicesElement.innerHTML = "";
    await this.updateUI();
    await this.updateTextpromt();
    await this.updateChoices();

  };

  async updateUI () {
    const ui = document.querySelector("#ui");
    ui.innerHTML = this.game.character.hp;
  }

  async updateTextpromt () {
    const currentPrompt = this.getGamePrompt();
    this.setTextPrompt(currentPrompt);
  }

  async updateChoices(){
    const currentPrompt = this.getGamePrompt();
    this.setChoicesPrompt(currentPrompt);
  }

  getGamePrompt = () => {
    const index = this.game.dialougeIndex;
    const level = this.game.levels.get(index.levelIndex);
    const prompt = level.prompts[index.promptGroupIndex][index.promptIndex];
    return prompt;
  }

  setChoicesPrompt(currentPrompt){
    const choicesElement = document.querySelector("#choices");
  
    if (currentPrompt.choices === undefined) {
      let {text, action} = currentPrompt.continueBtn ?? {text: "Next", action: this.game.nextPrompt};
      const nextBtn = createNextPromptButton(action, text);
      choicesElement.innerHTML = "";
      choicesElement.appendChild(nextBtn);
      return;
    }
  
    promptChoices(choicesElement, currentPrompt.choices);
  }

  setTextPrompt(currentPrompt){
    const textElement = document.querySelector("#text");
    textElement.innerHTML = "";
    promptText(textElement, currentPrompt.prompt);
  }
}




