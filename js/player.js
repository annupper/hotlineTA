const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_LEFT = 65;
const KEY_RIGHT = 68;

function Player(game) {
  this.game = game;

  // medidas de la imagen a representar en el canvas
  this.w = 40;
  this.h = 40;

  this.speedX = 15;
  this.speedY = 15;

    this.speed = 2,
    this.friction = 0.85,
    this.keys = [];

  this.setListeners();

  /*initial position*/
  this.x = this.game.canvas.width * 0.3;
  this.y = this.game.canvas.height * 0.5;

  this.img = new Image();
  this.img.src = 'images/flappy.png';

  // número de imágenes diferentes
  this.img.frames = 1;
  this.img.frameIndex = 0;

}


Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );


};

Player.prototype.setListeners = function () {
  document.onkeydown = function (e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEY_LEFT:
        if (this.game.world.checkCollisions(this, 0, -1)) {
          break;
        }
        this.x -= this.speedX;
        break;

      case KEY_UP:
        //console.log(this.game.world.collision);
        if (this.game.world.checkCollisions(this, -1, 0)) {
          break;
        }
        this.y -= this.speedY;
        break;
      case KEY_RIGHT:
        if (this.game.world.checkCollisions(this, 0, 1)) {
          break;
        }
        this.x += this.speedX;
        break;
      case KEY_DOWN:
        if (this.game.world.checkCollisions(this, 1, 0)) {
          break;
        }
        this.y += this.speedY;
        break;
    }
  }.bind(this);
};

