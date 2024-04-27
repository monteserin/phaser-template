import Phaser from "phaser";

class Bootloader extends Phaser.Scene {
  constructor() {
    super("bootloader");
  }

  preload() {
    // this.load.image("imgBG", '/assets/images/imgBG.png');
    // this.load.spritesheet("player", '/assets/images/spritesheet.png', {
    //   frameWidth: 64,
    //   frameHeight: 64,
    // });

    this.load.on("complete", () => this.scene.start("game"), this);
  }
}

export default Bootloader;
