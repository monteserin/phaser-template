import Phaser from "phaser";
import Bootloader from "./scenes/bootloader";
import Game from "./scenes/game";

const config = {
  width: 960,
  height: 640,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { y: 300 },
  //     debug: true,
  //   },
  // },
  scene: [Bootloader, Game],
};

const game = new Phaser.Game(config);
