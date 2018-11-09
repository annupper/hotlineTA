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

var punch = null;

function Player(game, playerPos, size) {
  this.game = game;

  // medidas de la imagen a representar en el canvas
  this.sw = 32;
  this.sh = 32;

  this.dw = size;
  this.dh = size;

  this.speedX = 15;
  this.speedY = 15;

    this.speed = 2,
    this.friction = 0.55,
    this.keys = [];

  this.setListeners();

  this.chosenCharacter = window.location.href.split("?player=")[1];

  listOfCharacters = {
    teo: 4,
    juan: 1,
    diego: 3,
    giorgio: 2,
    gabriel: 0
  }
  if (this.chosenCharacter){
    this.character = listOfCharacters[this.chosenCharacter];
  }else{
    this.character = 1;
  }

  /*initial sprite pos*/
  this.sx = (this.character * (this.sw * numberOfHorSprites));
  this.sy = 32*2;

  /*initial position*/
  this.dx = playerPos.x * playerWidth;
  this.dy = playerPos.y * playerHeight;
  console.log(this.sx + '-'+this.sy);
  this.img = new Image();
  this.img.src = 'images/walking_chars1.png';

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
          this.sx = (this.character * (this.sw * numberOfHorSprites));
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 0, -1)) {
          var punch = new MySound("sound/punch.mp3") 
          punch.play();
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
          this.sx = (this.character * (this.sw * numberOfHorSprites));
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, -1, 0)) {
          var punch = new MySound("sound/punch.mp3") 
        punch.play();
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
          this.sx = (this.character * (this.sw * numberOfHorSprites));
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 0, 1)) {
          var punch = new MySound("sound/punch.mp3") 
          punch.play();
          break;
        }
        //Move character
        this.dx += this.speedX;
        break;
      case KEY_DOWN:
      case DOWN_ARROW:
      this.sy = downSprite;
        if (this.sx >= this.sw * (numberOfHorSprites - 1)){
          this.sx = (this.character * (this.sw * numberOfHorSprites));
        }else{
          this.sx+=this.sw;
        }
        if (this.game.world.checkCollisions(this, 1, 0)) {
          var punch = new MySound("sound/punch.mp3") 
          punch.play();
          break;
        }
        
        this.dy += this.speedY;
        break;
    }
  }.bind(this);
};

