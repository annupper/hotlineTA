function World(game) {
    this.game = game;
    this.world = [[]];

    // size in the world in sprite tiles
    this.worldWidth = 11;
    this.worldHeight = 7;

    this.spritesheet = new Image();
    this.spritesheet.src = 'images/orig.gif';

    this.tileWidth = 100;
    this.tileHeight = 100;
    this.collision = false;

    this.type = "obstacle";
    this.score = 0;
    this.counterCoins = 10;

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
    for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 1; y < this.worldHeight; y++) {
            
            if (Math.random() > 0.85) {
               this.world[x][y] = new Obstacle(this.game, this.spritesheet, x * this.tileWidth,
                     y * this.tileHeight, this.tileWidth , this.tileHeight, "obstacle" );
            }
        }
    }
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
    if(player.x + horizontal * player.speedX < 0){
        return true
      }

      if(player.y + vertical * player.speedY < 0){
        return true
      }

      if(player.x + horizontal * player.speedX > this.game.canvas.width-player.w){
        return true
      }
      
      if(player.y + vertical * player.speedY > this.game.canvas.height-player.h){
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
                    this.world[x][y] = 0;
                    this.score +=1;
                    //console.log(this.score);
                }
            }
        }
    }
};

World.prototype.generateCoins = function() {

   for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 0; y < this.worldHeight; y++) {
            if (!this.world[x][y]) {
              if (Math.random() > 0.85 && this.counterCoins > 0) {
                        this.world[x][y] = new Coin(this.game, x * this.tileWidth,
                            y * this.tileHeight, this.tileWidth , this.tileHeight, "coin");
                        this.world[x][y].draw();
                        console.log(this.counterCoins);
                        this.counterCoins--;
              } 
            }
            
        }
    }

  /*  while(this.counterCoins >= 0) {
        var x = Math.floor(Math.random()*5);
        var y = Math.floor(Math.random()*5);
console.log("hi");
        if(!this.world[x][y]) {
            this.world[x][y] = new Coin(this.game, x * this.tileWidth,
                y * this.tileHeight, this.tileWidth , this.tileHeight, "coin");
            this.world[x][y].draw();
            this.counterCoins--;
            console.log(x , y);
        }

    } */
};


