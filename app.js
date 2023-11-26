import { loadDoc, loadVictoryScene } from './util/handler/loadDoc.js';

//* Import Classes
import Character from './classes/Character.js';
import Game from './classes/Game.js';

import Titlescreen from './titlescreen/titlescreen.js'

// =========================================================
// * Dev Variables
// =========================================================
const starting_Scene = "./titlescreen/titlescreen.html";
//const starting_Scene = "./level1/level1.html";

const player = new Character(100);
const game = new Game(player);
const titlescreen = new Titlescreen(game);

// =========================================================
// * Load Window
// =========================================================

window.addEventListener("load", async () => {


  loadTitlescreen();
})

//This is just for fun that if you resize the console the character starts walking through the door.
window.addEventListener("resize", (e) => {
  const character = $('.character');
  if (character.hasClass('character-walking')) {
    return;
  }
  character.addClass('character-walking');
});


/* Set Level does just change the variables and the DOMContentLoaded then prompts the dialogue */


const loadTitlescreen = async () => {
  await loadDoc(starting_Scene);
  //================
  // * Apply button function
  //================a

  const dropdownBtn = $('.dropbtn');
  dropdownBtn.on("click", showDropdown);

  const startBtn = $('#startBtn');
  startBtn.on("click", titlescreen.startGame)
}

// =========================================================
// * Dropdown
// =========================================================

function showDropdown() {
  document.querySelector("#myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
