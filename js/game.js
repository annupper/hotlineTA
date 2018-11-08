function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.initialTime = 35;
  this.level = 1;
  this.initialCoins = 10;
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
        if (this.world.score === this.initialCoins){
          this.nextLevel();
        }
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
  
  this.initialCoins = 10;
  this.time = this.initialTime - this.level;
  this.world.generateCoins();
  var playerPos = this.world.findEmptySpace();
  this.player = new Player(this, playerPos);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  //this.background.draw();
  this.world.draw();
  this.player.draw();
  this.drawText(this.level, 560 , 50, 40);
  this.drawText(`level`, 500 , 50, 20);
  this.drawText(this.world.score, 50 , 50, 40);
  this.drawText(`disquettes`, 100 , 50, 20);
  this.drawText(this.time, 870 , 50, 40);
  this.drawText(`seconds`, 920 , 50, 20);

};

Game.prototype.gameOver = function () {
  this.stop();
  //console.log("stopped");
  this.drawText("GAME OVER", 450, 300, 80);
  return true;
};

Game.prototype.nextLevel = function () {
  this.level++;
  this.world.score = 0;
  this.drawText("NEXT LEVEL", 450, 300, 80);
  this.reset();
};

Game.prototype.drawText = function(text, x, y, px) {
  this.ctx.font = `${px}px Pixel`;
  this.ctx.fillStyle = "white";
  this.ctx.fillText(text, x, y);
};


