
window.onload = function () {

  var b = document.querySelector("#canvas");
  b.style.display = "none";

  var a = document.querySelector("#startMessage");

  var game = new Game("canvas");

  document.querySelector("#restartGame").onclick = function (){

    a.style.display = "none";
    b.style.display = "block";
    game.level = 1;
    game.stop();
    game.clear();
    game.reset();
    game.start();
}
};

