
window.onload = function () {

  var game = new Game("canvas");
  game.start();

  document.querySelector("#restartGame").onclick = function (){
    game.stop();
    game.reset();
    game.clear();
    game.start();
}
};

