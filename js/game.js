function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();

}


Game.prototype.start = function () {
  //this.world.createWorld();
  this.interval = setInterval(function () {
    this.clear();
    //this.move();
    this.framesCounter++;

        // controlamos que frameCounter no sea superior a 1000
        if (this.framesCounter > 1000) {
          this.framesCounter = 0;
        }
    
        // controlamos la velocidad de generación de obstáculos
        if (this.framesCounter % 50 === 0) {
          //this.generateEnemy(); //generate enemy
        }
    
    this.draw();
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
  clearInterval(this.interval);
};

Game.prototype.reset = function () {
  this.framesCounter = 0;
  this.background = new Background(this);
  this.world = new World(this);
  this.world.createWorld();
  this.coin = new Coin(this);
  this.player = new Player(this);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  //this.background.draw();
  this.world.draw();
  this.coin.draw();
  this.player.draw();
};

Game.prototype.move = function () {

}