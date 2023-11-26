import Level from "../../classes/Level.js";
import { loadDoc } from "../../util/handler/loadDoc.js";


export default class DameonRoomLevel extends Level {
    constructor(game) {
        super(game);
    }

    loadLevel = () => {

    };

    createPrompts() {

        // =========================================================
        // * Flirt
        // =========================================================
        /* 
        
        *   
            The big Problem with this is, that the on-click function does not always get applied.
            And I dont know why but I think the reason is because of the async code
            because it does and does not work randomly.


            This is also the reason why this is in set Timeout.
        */

        const activateCharm = async () => {
            $('#text').empty();
            $('#choices').empty();
            await loadDoc("../../components/flirtPrompt.html", "#text");

            setTimeout(() => {
                const flirt = () => {
 
                    const text = flirtPrompt.val();
                    if (this.game.character.hasItem("Heart")) {
                        this.setLevel(null, 5);
                    } else if (text.toLowerCase() === "hi") {
                        this.setLevel(null, 1);
                    } else if (text.length < 20) {
                        this.setLevel(null, 2);
                    } else if (text.length < 50) {
                        this.setLevel(null, 3);
                    } else if (text.length > 50) {
                        this.setLevel(null, 4);

                    }
                }

                const flirtPrompt = $('#flirt-input');
                const flirtBtn = document.querySelector("#flirt-btn");
                flirtBtn.onclick = function () {
                    flirt();
                }

            }, 2);

/*             flirtBtn[0].onclick = flirt;
 */        }

        const pg0 = [
            { prompt: "There is a female daemon lady" },
            { prompt: "I don't know why I mentioned that she is female but maybe this fact was interesting." },
            {
                prompt:
                    "Do you want to play with your charme and maybe don't fight her and have a nice time with a nice deamon lady?",
                choices: [
                    {
                        text: "No one can resist my charme!",
                        action: activateCharm
                    },
                    {
                        text: "I can end her life to make mine better! 🥲",
                        action: () => this.setLevel(null, 6)
                    },

                ],
            }
        ];

        this.prompts.push(pg0);

        const pg1 = [
            {
                prompt: "Ok ok good start but.... maybe a little bit more affort",
                continueBtn: {
                    text: "Ok i will get it this time",
                    action: () => this.setLevel(),
                }
            }
        ];

        this.prompts.push(pg1);

        const pg2 = [
            { prompt: "Wow someone is trying really hard huh?" },
            { prompt: "Oh maybe it will work anyway .... maybe you got lucky!" },
            { prompt: "She is comming closer....." },
            { prompt: "Oook looking good .... " },
            { prompt: "no she just ate your head, and now.... yea i do not want to descripe the rest" },
            {
                prompt: "GAME OVER",
                continueBtn: {
                    text: "Ohhhhh",
                    action: () => console.log("The End"),
                }
            }
        ];

        this.prompts.push(pg2);


        const pg3 = [
            { prompt: "Awwwwwwww that is beatyfull she really liked that. Go get her boy or girl or they" },
            { prompt: "You may won the game but getting a girlfriend is never the way to get a life" },
            { prompt: "It is more like the complete opposite." },
            { prompt: "But it seems like you have won anyway." },
            {
                prompt: "VICTORY",
                continueBtn: {
                    text: "Nice",
                    action: () => console.log("The End"),
                }
            },

        ];

        this.prompts.push(pg3);

        const pg4 = [
            { prompt: "WOWOWOWOW kasanova chill it just makes you look desprite as fuck.... but maybe it works......" },
            { prompt: "..... you are very lucky that demons like this attitude.... You..... win....." },
            { prompt: "I did not expect that." },
            {
                prompt: "VICTORY",
                continueBtn: {
                    text: "Nice",
                    action: () => console.log("The End"),
                }
            }
        ];

        this.prompts.push(pg4);

        const pg5 = [
            { prompt: "Ouh boy that was..... weird" },
            { prompt: "But this words came with a big heart and I think she really liked it." },
            { prompt: "I mean you stole the heart and she ate it but yea.... now she likes you" },
            { prompt: "For now" },
            {
                prompt: "VICTORY",
                continueBtn: {
                    text: "Nice",
                    action: () => console.log("The End"),
                }
            }
        ];

        this.prompts.push(pg5);


        // =========================================================
        // * Kill her
        // =========================================================

        const fightDemon = () => {
            console.log(this.game.character.items);
            // * Problem
            /* Check for all items does not work because 
            weak set got no size and no for each to count the size */
            //---------------------------------------------------
            /* if (getSize(this.game.character.items) == Item.ITEMLIST.size) {
                this.setLevel(null, 7);
            } else */

            const character = this.game.character;
            /// * Check Items
            if (character.hasItem("Body") && character.hasItem("Vampire") && character.hasItem("Head") && character.hasItem("Leg")) {
                this.setLevel(null, 8);
            } else if (character.hasItem("Body") && character.hasItem("Vampire")) {
                this.setLevel(null, 9);
            } else if (character.hasItem("Body")) {
                this.setLevel(null, 10);
            } else if (character.hasItem("Fruit")) {
                this.setLevel(null, 11);
            } else if (character.hasItem("Leg")) {
                this.setLevel(null, 12);
            } else if (character.hasItem("LifeOrb")) {
                this.setLevel(null, 13)
            } else {
                this.setLevel(null, 14);
            }

        }

        const pg6 = [
            { prompt: "Ok lets goooooo!!" },
            { prompt: "Fight a Demon-Queen with zero items, knowledge, strength, humanity, not even an army, intelligence, ambition, bravery...... " },
            { prompt: "Ok I think you get the point but here we go, try it." },
            {
                prompt: "Lets see which items you got maybe we have a chance.",
                continueBtn: {
                    text: "What could go wrong",
                    action: fightDemon,
                }
            }
        ];

        this.prompts.push(pg6);


        // * All Items
        const pg7 = [
            { prompt: "You.... you got what.... all items? how is this.... ok nice" },
            { prompt: "Here we go then this should be a peace of cake" },
            { prompt: "I got all body parts simply so you can get full human mode and end this very fast with a super nova from the fruit" },
            { prompt: "And there is it kame hame ok no stop siply finish it..... nice" },
            {
                prompt: "Victory",
                continueBtn: {
                    text: "Nice",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg7);

        //Human and vampire
        const pg8 = [
            { prompt: "All Body parts and a vampire" },
            { prompt: "You can get a nice overlord and fight like a real man" },
            { prompt: "And here you go...." },
            { prompt: "This really looks like an epic fight" },
            { prompt: "Vampire-Human vesus demon.... " },
            { prompt: "Nice fight you won" },
            {
                prompt: "VICTORY",
                continueBtn: {
                    text: "Nice",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg8);

        //Body and Vampire
        const pg9 = [
            { prompt: "You get the items out of your backpack." },
            { prompt: "Lets see there is a dead body of a vampire and..... oh" },
            { prompt: "I guess the other vampire just saw his dead collegue....." },
            { prompt: "Maybe this was not the best idea to show that to him" },
            { prompt: "Seems like a 2 v 1 now and you got....... nothing" },
            { prompt: "Jap you died" },
            {
                prompt: "GAME OVER",
                continueBtn: {
                    text: "So close",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg9);

        //Body
        const pg10 = [
            { prompt: "I think you can use the body of the vampire and the head to get a hybrid human form" },
            { prompt: "Jap it works" },
            { prompt: "You got weak vampire powers now maybe this is enough" },
            { prompt: "Seems like a close fight....." },
            { prompt: "Very Close" },
            { prompt: "Ok not even you were dead in 5 seconds but nice try" },
            {
                prompt: "GAME OVER",
                continueBtn: {
                    text: "Wow thanks",
                    action: () => "The end",
                }
            }
        ];

        this.prompts.push(pg10);

        //Fruit
        const pg11 = [
            { prompt: "You already used the fruit so just do it again!!" },
            { prompt: "What do you mean you don't know how?" },
            { prompt: "It is just a laser beam out of your hand it can't be that hard....." },
            { prompt: "After 30 minutes of running you finally did it....." },
            {
                prompt: "You killed her.",
                continueBtn: {
                    text: "Finally",
                    action: () => console.log("The end"),
                }
            }
        ];

        this.prompts.push(pg11);

        // Leg
        const pg12 = [
            { prompt: "hmmmm ok we got.... a leg........" },
            { prompt: "Anything else maybe....... pleaase" },
            { prompt: "This will never work" },
            { prompt: "Oh wait there is a body growing out of the leg" },
            { prompt: "Fast... take it before he runs.... or whatever this is he is doing away" },
            { prompt: "Nice you are human now....... random" },
            { prompt: "Take the sword laying around and kill her" },
            {
                prompt: "VICTORY",
                continueBtn: {
                    text: "How?",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg12);

        // Leg
        const pg13 = [
            { prompt: "Just the..... live orb" },
            { prompt: "I told you this was a bad idea...." },
            { prompt: "You have to use it again maybe you survie" },
            { prompt: "Uhhhhh you look even more shiny now" },
            { prompt: "And...... you dead.... nice.... feels good to me" },
            {
                prompt: "Game Over",
                continueBtn: {
                    text: "But it sounded good?",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg13);

        // Leg
        const pg14 = [
            { prompt: "Congrats... you got absolutely nothing" },
            { prompt: "But the good thing is...." },
            { prompt: "I do not need to make much dialogue!!" },
            {
                prompt: "Game Over",
                continueBtn: {
                    text: "But it sounded good?",
                    action: () => console.log("the end"),
                }
            }
        ];

        this.prompts.push(pg14);

    }

}
