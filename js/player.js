function Player(game) {
    this.game = game;
  
      // medidas de la imagen a representar en el canvas
      this.w = 75;
      this.h = 75;
    
      this.vy = 1;
    
    
      this.setListeners();
  
  
    this.gravity = 0,4;
  
   
    this.x = this.game.canvas.width * 0.3;
  
    // guardar posición original (suelo)
    this.y = this.game.canvas.height * 0.5;
  
    this.img = new Image();
    //this.img.src = '../images/flappy.png';

    this.img.src = 'images/flappy.png';
    
    // número de imágenes diferentes
    this.img.frames = 1;
    this.img.frameIndex = 0;
  
  }
  
  var TOP_KEY = 38;
  var SPACE = 32;
  
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
    document.onkeydown = function(event) {
      if (event.keyCode === TOP_KEY && this.y == this.y0) {
        this.y -= 5;
        this.vy -= 10;
      } else if (event.keyCode == SPACE) {
        this.shoot();
      }
    }.bind(this);
  };
  
  Player.prototype.move = function() {
    
  
  };