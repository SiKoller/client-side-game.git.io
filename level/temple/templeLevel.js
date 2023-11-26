import Level from "../../classes/Level.js";
import Item from "../../classes/Item.js";

export default class TempleLevel extends Level {
    constructor(game) {
        super(game);
    }

    loadLevel = () => { 
        console.log(this.game.character.hasItem("Vampire"));
        if(this.game.character.hasItem("Vampire")){
            this.setLevel(null, 2);
        }
    };

    createPrompts() {

        const eatFruit = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Fruit"));
            this.setLevel(null, 4);
        }

        const dontEatFruit = () => {
            this.setLevel(null, 1);
        }

        const pg0 = [
            { prompt: "You get to a temple where a shiny fruit is placed on an altar." },
            { prompt: "What could possibly go wrong?" },
            {
                prompt:
                    "Do you want to eat it",
                choices: [
                    {
                        text: "I already ran from the vampire of course i eat it i am not a pussy!!!!",
                        action: eatFruit,
                    },
                    {
                        text: "No seems like a trap i will pass",
                        action: dontEatFruit,
                    },
                ],
            },
        ];

        this.prompts.push(pg0);

        const pg1 = [
            { prompt: "A wild temple monster came out of the dark and saw you, you were to weak to defeat it" },
            {
                prompt: "GAME OVER",
                continueBtn: {
                    text: "Oh Sad",
                    action: () => console.log("Game Over"),
                }
            }
        ]; 

        this.prompts.push(pg1);

        const eatFruitWithVampire = () => {
            if (this.game.character.hasItem("Vampire")) {
                this.setLevel(null, 3);
            } else{
                eatFruit();
            }
        }

        const dontEatFruitWithVampire = () => {
            if (this.game.character.hasItem("Vampire")) {
                this.setLevel(null, 3);
            } else{
                this.dontEatFruit();
            }
        }

        const pg2 = [
            { prompt: "You get to a temple where a shiny fruit is placed on an altar." },
            { prompt: "What could possibly go wrong?" },
            {
                prompt:
                    "Do you want to eat it",
                choices: [
                    {
                        text: "Yea lets go!!",
                        action: eatFruitWithVampire,
                    },
                    {
                        text: "No seems like a trap i will pass",
                        action: dontEatFruitWithVampire,
                    },
                ],
            },
        ];

        this.prompts.push(pg2);

        const getBody = () => {
            this.game.character.addItem(Item.ITEMLIST.get("Body"));
            this.game.character.removeItem(Item.ITEMLIST.get("Vampire"));
            this.setLevel("demonRoom");
        }

        const pg3 = [
            { prompt: "Because you are a nice guy" },
            { prompt: "I mean... at least an undead guys with an weird head." },
            { prompt: "You share the fruit with the vampire." },
            { prompt: "Yea... I know a vampire who doesn't like whiskey but fruits" },
            { prompt: "But worth it he seems to like it 😊"},
            { prompt: "Aaaaaaaand he is dead......"},
            { prompt: "Nice you killed a vampire by being friendly....."},
            { prompt: "What an irony huh..... but now you got a body you can collect so... worth it I guess",
                continueBtn:{
                    text: "I guess so?",
                    action: getBody
                }
            }

        ];

        this.prompts.push(pg3);

        const pg4 = [
            { prompt: "You eat the fruit and get a strange feeling in your stomache" },
            { prompt: "but at the same time you feel stronger..... " },
            { prompt: "It feels like you can control light now ....." },
            { prompt: "A big creature heared that and is now comming from the room next to you." },
            { prompt: "It looks like a big golem with some dark stones on it and seems not really amused that you ate that fruit!" },
           
            { prompt: "Out of nowhere your power starts to grow enormous and you shoot a light ray through the creature.",
                continueBtn:{
                    text: "GG ez",
                    action: () =>  this.setLevel("demonRoom")
                }
            }

        ];

        this.prompts.push(pg4);

    }

}
