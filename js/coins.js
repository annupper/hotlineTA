function Coin(game, x, y, w, h, type) {
    this.game = game;

    this.img = new Image();
    this.img.src = "images/haha.jpg";

    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;

    this.type = type;
    this.counterCoins = 0;
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
    if(player.x + horizontal * player.speedX < this.x + this.w
        && player.x + horizontal * player.speedX + player.w> this.x
        && player.y + vertical   * player.speedY < this.y + this.h
        && player.y + vertical   * player.speedY + player.h> this.y) {
           return true;
       }
};

