import loadLevel from '../util/handler/levelHandler.js'

export default class Titlescreen {

    constructor(game) {
        this.game = game;
    }

    startGame = () => {
        // const r = $.Deferred();
        const character = $("#titlescreenCharacter");
        character.addClass("start-animation");

        const start = () => {
            // =========================================================
            // * Start Game Audio
            // =========================================================
           /* Loads the background sountrack */
           /* Credits to my brother who made this banger soundtrack */
            const soundTrack = new Audio();
            soundTrack.src = '../assets/sounds/Julain-A_brieg_history_of_time.mp3';
            soundTrack.volume = 0.1;
            soundTrack.loop = true;
            soundTrack.play();

            // =========================================================
            // * Setup Game style
            // =========================================================
            const prompt = scene.querySelector("#prompt");
            prompt.classList.add("prompt");

            // =========================================================
            // * Start Game
            // =========================================================
            this.game.startGame();
        };

        setTimeout(start, 1470);
    };

    removeClass = () => $("#titlescreenCharacter").removeClass("start-animation");


}