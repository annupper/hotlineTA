function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.sec = 700;

  this.reset();

}


Game.prototype.start = function () {
  //this.world.createWorld();
  this.interval = setInterval(function () {
    this.clear();
    //this.move();
    this.draw();
    this.sec--;
    console.log(this.sec);
    if(this.sec < -1) {
      this.gameOver();
    }
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function () {
  clearInterval(this.interval);
};

Game.prototype.reset = function () {
  this.background = new Background(this);
  this.world = new World(this);
  this.world.createWorld();
  this.world.generateCoins();
  this.player = new Player(this);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  //this.background.draw();
  this.world.draw();
  this.player.draw();
};

Game.prototype.gameOver = function () {
  this.stop();
  alert(`game over your score is ${this.world.score}`);
}


