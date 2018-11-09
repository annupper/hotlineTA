const obstacles = ['images/car.png','images/orig.gif','images/cactus.gif'];
const coins = ['images/wep_uzi.png','images/disquette.png','images/flappy.png','images/cddisc1.png'];

function World(game) {
    this.game = game;
    this.world = [[]];

    // size in the world in sprite tiles
    this.worldWidth = 11;
    this.worldHeight = 7;

    this.spritesheet = new Image();
    this.spritesheet.src = 'images/orig.gif';

    this.coinImage = new Image();
    this.coinImage.src = "images/disquette.png";

    this.tileWidth = 100;
    this.tileHeight = 100;
    this.collision = false;

    this.type = "obstacle";
    this.score = 0;
    this.counterCoins = this.game.initialCoins;

}

// fill the world with walls
World.prototype.createWorld = function () {
    //debugger

    // create emptiness
    for (var x = 0; x < this.worldWidth; x++) {
        this.world[x] = [];
        for (var y = 0; y < this.worldHeight; y++) {
            this.world[x][y] = 0;
        }
    }

    // scatter some walls
    let worldAvailablePositions = this.worldWidth * this.worldHeight;
    let numberOfWallElements =Math.floor(Math.random() * (worldAvailablePositions * (0.05*this.game.level))) + Math.floor(worldAvailablePositions * 0.1);
    
   
    for (var y = 1; y < numberOfWallElements; y++) {
        this.spritesheet.src = obstacles[this.game.level%obstacles.length];
        var emptyObstaclePos = this.findEmptySpace("obstacle");
        
           this.world[emptyObstaclePos.x][emptyObstaclePos.y] = new Obstacle(this.game, this.spritesheet, emptyObstaclePos.x * this.tileWidth,
            emptyObstaclePos.y * this.tileHeight, this.tileWidth , this.tileHeight, "obstacle" );
        
    }

    /*for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 1; y < this.worldHeight; y++) {
            if (Math.random() > 0.85) {
               this.world[x][y] = new Obstacle(this.game, this.spritesheet, x * this.tileWidth,
                     y * this.tileHeight, this.tileWidth , this.tileHeight, "obstacle" );
            }
        }
    }*/
};

World.prototype.draw = function() {
    for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 1; y < this.worldHeight; y++) {
            
            if (this.world[x][y]) {
               this.world[x][y].draw();
        
            }
          
        }
    }
  
}

World.prototype.checkCollisions = function(player,vertical,horizontal) {
    if(player.dx + horizontal * player.speedX < 0){
        return true
      }

      if(player.dy + vertical * player.speedY < 0){
        return true
      }

      if(player.dx + horizontal * player.speedX > this.game.canvas.width-player.dw){
        return true
      }
      
      if(player.dy + vertical * player.speedY > this.game.canvas.height-player.dh){
        return true
      }


      for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 0; y < this.worldHeight; y++) { 
            if (this.world[x][y].type === "obstacle") {
               if (this.world[x][y].checkCollision(player, vertical, horizontal)) {
                   return true;
               }
            }else if (this.world[x][y].type === "coin"){
                if(this.world[x][y].checkCollision(player, vertical, horizontal)) {
                    var artifact = new MySound("sound/artifact.mp3") 
                    artifact.play();
                    this.world[x][y] = 0;
                    this.score +=1;
                    //console.log(this.score);
                }
            }
        }
    }
};

World.prototype.generateCoins = function() {

    while (this.counterCoins>0) {
        this.coinImage.src = coins[this.game.level%coins.length];
        let coinPosition = this.findEmptySpace("coin");
        
        this.world[coinPosition.x][coinPosition.y] = new Coin(this.game, this.coinImage, coinPosition.x * this.tileWidth,
            coinPosition.y * this.tileHeight, this.tileWidth - this.counterCoins , this.tileHeight - this.counterCoins, "coin");
        
        this.counterCoins--;  
    }
    
};

World.prototype.findEmptySpace = function(type){
    let emptyPosition = false;
    let emptyPosX, emptyPosY = 0;
    let minMargin = 0;


    while (!emptyPosition){
        emptyPosX = Math.floor(Math.random() * (this.worldWidth - 1)) + 1; // Random X pos from 0 to total world width
        emptyPosY = Math.floor(Math.random() * (this.worldHeight - 2)) + 1; // Random Y pos from 0 to total world width
        emptyPosition = this.world[emptyPosX][emptyPosY]===0; 
    }
    return {x: emptyPosX, y: emptyPosY};
}


