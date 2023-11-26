import DialogueService from "../util/services/DialogueService.js";
import DungeonLevel from "../level/dungeon/dunegonLevel.js";
import VampireCaveLevel from "../level/vampireCave/vampireCaveLevel.js";

import loadLevel from "../util/handler/levelHandler.js";
import TempleLevel from "../level/temple/templeLevel.js";
import LootRoomLevel from "../level/lootRoom/lootRoomLevel.js";
import DameonRoomLevel from "../level/demonRoom/demonRoomLevel.js";
import VisitedLevelService from "../util/services/VisitedLevelService.js";

/**
 * Stores the values and states of the game
 * and loads the new levels
 */
export default class Game {

  // =========================================================
  // * Dev Variables
  // =========================================================
  static item_skip = 1;

  constructor(character) {
    this.character = character;
    this.levels = this.InitLevels()
    const [firstIndex] = this.levels.keys()
    this.dialougeIndex = { levelIndex: firstIndex, promptGroupIndex: 0, promptIndex: 0 }
    this.visitedLevelService = new VisitedLevelService(this);
    this.dialogueService = new DialogueService(this);
  }

  InitLevels = () => {
    const levels = new Map();
    levels.set("dungeon", new DungeonLevel(this));
    levels.set("vampireCave", new VampireCaveLevel(this));
    levels.set("temple", new TempleLevel(this));
    levels.set("lootRoom", new LootRoomLevel(this));
    levels.set("demonRoom", new DameonRoomLevel(this));
    return levels;
  }


  async startGame() {
    this.setLevel("dungeon");
  }

  setLevel = async (levelName = null, promptGroupIndex = 0, promptIndex = 0) => {
    if (levelName != null) {
      await this.visitedLevelService.addVisitedLevelToMenue(levelName);
      /* This is to load the visited levels from the cookies so you can close the browser and reload the levels.
         This is optinal an maybe will be inplemented later 
      -------------------------------------------------------------------*/
      /* setCookies("visitedLevel="+Array.from(this.visitedLevelService.visitedLevel).join(";")+";");
         getCookie() 
        __________________________________________________________________*/


      // =========================================================
      // * Load Level
      // =========================================================
      this.dialougeIndex.levelIndex = levelName; //Sets the dialogue Index
      await loadLevel(levelName); //Loads the HTML from the level
    }

    //Removes the animation for the wal
    $('.character')?.removeClass('character-walking');

    this.setPromptGroup(promptGroupIndex);
    this.setPrompt(promptIndex);
    if (promptIndex == 0 && promptGroupIndex == 0) {
      this.levels.get(this.dialougeIndex.levelIndex).loadLevel();
    }
    this.dialogueService.promptDialogue();
  }

  setPromptGroup = (promptgroupIndex) => {
    if (promptgroupIndex == null) {
      this.dialougeIndex.promptGroupIndex++;
    }
    this.dialougeIndex.promptGroupIndex = promptgroupIndex;
  }

  setPrompt = (prompt = null) => {

    if (prompt === null) {
      this.dialougeIndex.promptIndex++;
      return;
    }

    this.dialougeIndex.promptIndex = prompt;
  }

  nextPrompt = () => {
    this.setPrompt();
    this.dialogueService.promptDialogue();
  }
}