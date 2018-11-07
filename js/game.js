function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();

  this.scorePositionx = 50;
  this.scorePositiony = 50;

}


Game.prototype.start = function () {
    this.interval = setInterval(function () {
      this.framesCounter ++;
      this.clear();
      this.draw();
      if(this.framesCounter % 60 === 0) {
       this.time--;
       if(this.time === 0) {
        this.clear();
        this.gameOver();
       }
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
  this.framesCounter = 0;
  this.time = 15;
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
  this.drawText(this.world.score, 50 , 50, 40);
  this.drawText(`disquttes`, 90 , 50, 20);
  this.drawText(this.time, 870 , 50, 40);
  this.drawText(`seconds`, 920 , 50, 20);

};

Game.prototype.gameOver = function () {
  this.stop();
  //console.log("stopped");
  this.drawText("GAME OVER", 370, 300, 80);
  return true;
};

Game.prototype.drawWin = function () {
  this.stop();
  //console.log("stopped");
  this.drawText("TA WINS", 400, 300, 80);
  return true;
};

Game.prototype.drawText = function(text, x, y, px) {
  this.ctx.font = `${px}px Pixel`;
  this.ctx.fillStyle = "white";
  this.ctx.fillText(text, x, y);
};




