import Phaser from "phaser";

class Bootloader extends Phaser.Scene {
  constructor() {
    super("bootloader");
  }

  preload() {
    this.load.on("complete", () => this.scene.start("game"), this);
  }
}

export default Bootloader;
