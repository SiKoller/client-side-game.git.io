import Level from "../../classes/Level.js";
import Item from "../../classes/Item.js";

export default class LootRoom extends Level {
    constructor(game) {
        super(game);
    }

    loadLevel = () => { };

    createPrompts() {

        const getLeg = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Leg"));
            this.setLevel("demonRoom");
        };

        const getHeart = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Heart"));
            this.setLevel("demonRoom");
        };

        const getBrain = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Brain"));
            this.setLevel(null, 4);
        };

        const getLifeorb = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Lifeorb"));
            this.setLevel(null, 1);
        };

        const pg0 = [
            { prompt: "You see a bunch of loot" },
            { prompt: "A leg ,a heart, a brain and a life orb" },
            {
                prompt:
                    "which loot do you want?",
                choices: [
                    {
                        text: "leg..... sounds delicious ^^",
                        action: getLeg,
                    },
                    {
                        text: "I was always a men with heart... yea lets take that",
                        action: getHeart,
                    },
                    {
                        text: "BRAAAAAIIIIIINNNNNNNN",
                        action: getBrain,
                    },
                    {
                        text: "life orb sound op i get that",
                        action: getLifeorb,
                    },
                ],
            }
        ];

        this.prompts.push(pg0);

        const testLife = () => {
            if (this.game.character.hasItem("Head")) {
                this.setLevel(null, 2);
                return;
            }
            this.setLevel(null, 3);
        }

        const pg1 = [
            { prompt: "A life orb......... really" },
            {
                prompt: "I made so many dialogues and you think you instantly beat the game just because something is called life orb."
            }, { prompt: "This game is called get a life not get a life orb!!" },
            { prompt: "But maybe you got lucky let me check real quick....." },
            {
                prompt: "Hmmmmm .... dadada.... ladida..... hm... ok....",
                continueBtn: {
                    text: "Ok i can wait...",
                    action: testLife
                }
            },
        ];

        this.prompts.push(pg1);


        const pg2 = [
            { prompt: "You at least got a head so it does not complete kill you......" },
            {
                prompt: "But it was very close",
                continueBtn: {
                    text: "Ok i will take it",
                    action: () => this.setLevel("demonRoom")
                }
            },
        ];

        this.prompts.push(pg2);

        const pg3 = [
            { prompt: "......" },
            { prompt: "..........................." },
            { prompt: "........................................................................................" },
            { prompt: "You have not got a head too ... did you even try?" },
            { prompt: "Ok... no I will not deal with that you know what" },
            { prompt: "You die..... See that's what you got!!" },
            {
                prompt: "I hope you feel got now!",
                continueBtn: {
                    text: "Ok seems fair I deserve it.",
                    action: () => console.log("Game Over")
                }
            },
        ];

        this.prompts.push(pg3);

        const pg4 = [
            { prompt: "Wait now that you got a brain" },
            { prompt: "I mean.... at least physically" },
            { prompt: "..... in your hands" },
            { prompt: "You know what doesn't matter!" },
            { prompt: "Wouldn't it be better to first go to the other rooms and check their loot before going in this cave which absolutely looks too overpowered?",
                continueBtn: {
                    text: "Yea true lets do it",
                    action: () => this.setLevel("temple",2)
                }
            },
        ];

        this.prompts.push(pg4);


    }

}
