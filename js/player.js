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

      this.friction = 0.8;

      this.setListeners();
  
   /*initial position*/
    this.x = this.game.canvas.width * 0.3;
    this.y = this.game.canvas.height * 0.5;
  
    this.img = new Image();
    //this.img.src = '../images/flappy.png';

    this.img.src = 'images/flappy.png';
    
    // número de imágenes diferentes
    this.img.frames = 1;
    this.img.frameIndex = 0;
  
  }
  
  
  Player.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  
  
  };
  
  Player.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      e.preventDefault();
      switch(e.keyCode) {
        case KEY_LEFT: 
        if(this.x >= 0 ){
          this.x -= this.speedX;
        }
          break; 
        case KEY_UP: 
        if(this.y >= 0) {
          this.y -= this.speedY;
        }
          break; 
        case KEY_RIGHT:
        if(this.x <= this.game.canvas.width-this.w) {
          this.x += this.speedX;
        }
          break; 
        case KEY_DOWN: 
          if(this.y <= this.game.canvas.height-this.h) {
            this.y += this.speedY;
          }
          break; 
      }
    }.bind(this);
  };



