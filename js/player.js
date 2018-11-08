const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_LEFT = 65;
const KEY_RIGHT = 68;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const playerWidth = 100;
const playerHeight = 100;
const numberOfHorSprites = 3;
const upSprite = 96;
const downSprite = 0;
const leftSprite = 32;
const rightSprite = 64;

function Player(game, playerPos) {
  this.game = game;

  // medidas de la imagen a representar en el canvas
  this.sw = 32;
  this.sh = 32;

  this.dw = 50;
  this.dh = 50;

  this.speedX = 15;
  this.speedY = 15;

    this.speed = 2,
    this.friction = 0.55,
    this.keys = [];

  this.setListeners();

  /*initial sprite pos*/
  this.sx = 32;
  this.sy = 65;

  /*initial position*/
  this.dx = playerPos.x * playerWidth;
  this.dy = playerPos.y * playerHeight;

  this.img = new Image();
  this.img.src = 'images/walking_chars.png';

  // número de imágenes diferentes
  this.img.frames = 1;
  this.img.frameIndex = 0;

}


Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    this.sx,
    this.sy,
    this.sw,
    this.sh,
    this.dx,
    this.dy,
    this.dw,
    this.dh
  );


};

Player.prototype.setListeners = function () {
  document.onkeydown = function (e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEY_LEFT:
      case LEFT_ARROW:
      // Point character down direction
      this.sy = leftSprite;
      //Calculate next sprite position
        if (this.sx >= this.sw * (numberOfHorSprites - 1)){
          this.sx = 0;
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 0, -1)) {
          break;
        }
        //Move character
        this.dx -= this.speedX;
        break;

      case KEY_UP:
      case UP_ARROW:
        //console.log(this.game.world.collision);
        //frameIndex
        // Point character up direction
        this.sy = upSprite;
        //Calculate next sprite position
        if (this.sx >= this.sw * (numberOfHorSprites - 1)){
          this.sx = 0;
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, -1, 0)) {
          break;
        }
        //Move character
        this.dy -= this.speedY;
        break;
      case KEY_RIGHT:
      case RIGHT_ARROW:
      // Point character up direction
      this.sy = rightSprite;
      //Calculate next sprite position
        if (this.sx >= this.sw * (numberOfHorSprites - 1)){
          this.sx = 0;
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 0, 1)) {
          break;
        }
        //Move character
        this.dx += this.speedX;
        break;
      case KEY_DOWN:
      case DOWN_ARROW:
      this.sy = downSprite;
        if (this.sx >= this.sw * (numberOfHorSprites - 1)){
          this.sx = 0;
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 1, 0)) {
          break;
        }
        
        this.dy += this.speedY;
        break;
    }
  }.bind(this);
};

