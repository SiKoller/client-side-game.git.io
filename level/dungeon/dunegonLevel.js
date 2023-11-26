
import Level from "../../classes/Level.js";
import Item from "../../classes/Item.js";

export default class DungeonLevel extends Level {
    constructor(game) {
        super(game);
    }

    loadLevel = () => {
    }

    createPrompts() {


        const eatSoul = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Head"));
            this.setLevel(null, 1);
        }

        const dontEatSoul = () => {
            this.setLevel("vampireCave");
        }

        const pg1 = [
            { prompt: "You see a dying Stickman who just lost his soul..." },
            {
                prompt:
                    "Do you want to eat it, finally get a soul and go on murderous adventures?",
                choices: [
                    {
                        text: "Yes yummy yummy i love soul",
                        action: eatSoul,
                    },
                    {
                        text: "No i am Sorry i am vegan",
                        action: dontEatSoul,
                    },
                ],
            },
        ];

        this.prompts.push(pg1);

        const pg2 = [
            { prompt: "You eat the soul and instantly feel more alive" },
            { prompt: "Blood is going through your veins." },
            {
                prompt: "Your head fell off and a new one is growing.",
                continueBtn: {
                    text: "Next",
                    action: () => this.setLevel("vampireCave")
                }
            },

        ];

        this.prompts.push(pg2);


    }
}
