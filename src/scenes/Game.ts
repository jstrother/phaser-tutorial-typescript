import Phaser from 'phaser';
import AnimationKeys from '../consts/AnimationKeys';
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0, 0);
    
    this.add.sprite(
      width * 0.5,
      height * 0.5,
      TextureKeys.RocketMouse,
      'rocketmouse_fly01.png'
    ).play(AnimationKeys.RocketMouseRun);
  }
}