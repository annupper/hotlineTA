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
        for (var y = 0; y < this.worldHeight; y++) {

            if (Math.random() > 0.75) {
                this.world[x][y] = 1;
                console.log(this.spritesheet);
        
            }
        }
    }

    //this.draw();

};

World.prototype.draw = function() {
    for (var x = 0; x < this.worldWidth; x++) {
        for (var y = 0; y < this.worldHeight; y++) {

            if (this.world[x][y] === 1) {
                this.game.ctx.drawImage(this.spritesheet,
                    x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight
                   );
        
            }
        }
    }
  
}
