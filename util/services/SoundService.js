export default function playSound(sound){
   const audio =  new Audio(sound);
   audio.volume = 0.2;
   audio.play();
};