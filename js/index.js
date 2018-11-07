
window.onload = function () {

  var game = new Game("canvas");
  game.start();

  document.querySelector("#restartGame").onclick = function (){
    game.clear();
    game.reset();
    game.start();
}
};


