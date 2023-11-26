import Level from "../../classes/Level.js";
import Item from "../../classes/Item.js";

export default class VampireCaveLevel extends Level {

    constructor(game) {
        super(game);
    }

    loadLevel = () => {
        if(this.game.character.hasItem("Head")){
            this.setLevel(null, 1);
        }
    };

    createPrompts() {

        const run = () => {
            this.setLevel("temple");
        }

        const pg3 = [
            { prompt: "You see a Vampire" },
            {
                prompt:
                    "Kill him?",
                choices: [
                    {
                        text: "Yea why not",
                        action: () => killVampire(30),
                    },
                    {
                        text: "Run",
                        action: run,
                    },
                ],
            },
            {
                prompt: "Forunatelly you are not as vulnerable as a human but got hurt pretty bad",
                action: () => this.setLevel("temple"),
            }
        ];

        this.prompts.push(pg3);


        //Eat Soul
        const killVampire = (hp) => {
            this.game.character.looseHP(hp)
            this.setLevel("lootRoom");
        }

        const makeFriend = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Vampire"));
            this.nextPrompt();
        }

        const pg = [
            { prompt: "You see a Vampire" },
            {
                prompt:
                    "Kill him?",
                choices: [
                    {
                        text: "Yea why not",
                        action: () => killVampire(50),
                    },
                    {
                        text: "Make friend",
                        action: makeFriend,
                    },
                ],
            },
            {
                prompt: `He looks like he is a friendly guy but just needs a little drink`,},
                {prompt: "Maybe then he will become your friend"},
                {prompt: "Good thing you brought some whiskey..... do vampires drink whiskey?"},
                {prompt: "Yea no he wants your blood.... go ahead and let him have some."},
                {prompt: "I am sure you will get some nice super powers!!"},
                {prompt: "He now follows you and you got less human... but now you are vampire which cooler anyway!",

                continueBtn: {
                    text: "Next Level",
                    action: () => this.setLevel("lootRoom"),
                }
            }
        ];

        this.prompts.push(pg);
    }
}