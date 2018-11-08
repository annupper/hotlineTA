function Coin(game, img, x, y, w, h, type) {
    this.game = game;

    this.img = img;

    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;

    this.type = type;
}

Coin.prototype.draw = function() {
    
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
    
};

Coin.prototype.checkCollision = function (player, vertical, horizontal) {
    if(player.dx + horizontal * player.speedX < this.x + this.w
        && player.dx + horizontal * player.speedX + player.dw> this.x
        && player.dy + vertical   * player.speedY < this.y + this.h
        && player.dy + vertical   * player.speedY + player.dh> this.y) {
           return true;
       }
};

