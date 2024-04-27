import Phaser from "phaser";
import Bootloader from "./scenes/bootloader";
import Game from "./scenes/game";

const config = {
  width: 1000,
  height: 800,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  autoRound: false,
  parent: "contenedor",
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
