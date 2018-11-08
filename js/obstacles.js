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

        if(player.dx + horizontal * player.speedX < this.x + this.w
    && player.dx + horizontal * player.speedX + player.dw> this.x
    && player.dy + vertical   * player.speedY < this.y + this.h
    && player.dy + vertical   * player.speedY + player.dh> this.y) {
       return true;
   }
}