function Coin(game) {
    this.game = game;

    this.img = new Image();
    this.img.src = "images/haha.jpg";

    this.w = 40;
    this.h = 40;

    this.speedX = 15;
    this.speedY = 15;

    this.x = 0;
    this.y = 0;

}

Coin.prototype.draw = function() {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
}