function Obstacle (game, img, x, y, w, h, type) {
    this.game = game;
    this.obstacles = [];

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.type = type;
}

Obstacle.prototype.draw = function() {
    this.game.ctx.drawImage(this.img,
        this.x, this.y, this.w, this.h
       );
}

Obstacle.prototype.checkCollision = function(player, vertical, horizontal) {

        if(player.x + horizontal * player.speedX < this.x + this.w
    && player.x + horizontal * player.speedX + player.w> this.x
    && player.y + vertical   * player.speedY < this.y + this.h
    && player.y + vertical   * player.speedY + player.h> this.y) {
       return true;
   }
}