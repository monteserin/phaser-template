import Phaser from "phaser";

class Bootloader extends Phaser.Scene {
  constructor() {
    super("bootloader");
  }

  preload() {
    // this.load.image("background", bg);
    // this.load.spritesheet("player", player, {
    //   frameWidth: 64,
    //   frameHeight: 64,
    // });

    this.load.on("complete", () => this.scene.start("game"), this);
  }
}

export default Bootloader;
