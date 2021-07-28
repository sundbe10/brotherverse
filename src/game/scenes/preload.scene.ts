import * as Phaser from 'phaser';
import { phaserConfig } from '../../config/phaser.config';
 
export class PreloadScene extends Phaser.Scene {

  constructor ( ) {
    super('Preload');
  }
 
  preload () {
    // Fonts
    this.load['rexWebFont']({
      custom: {
        families: ["devant", "modelica"],
        urls: ['./bundle.css']
      }
    })
    
    // Images
    // this.load.image('alien-eye', 'assets/images/alien-eye.png');

    // Player Assets
    // this.load.spritesheet('explosion-red', 'assets/images/explosion.png', { frameWidth: 150, frameHeight: 150 });

    // Audio
    //this.load.audio('game-music', 'assets/audio/game-music.mp3');
    
    // Loading Progress
    this.cameras.main.setBackgroundColor('#ffffff')

    this.load.on('progress', value => {
        /*if(this.loadingBar) {
          this.loadingBar.updateProgress(value);
        }*/
    });
   
  }

  create() {
    // Add Music
    // this.soundService.addMusic(this, 'game-music', 'game-music', { loop: true });

    // Animation
    /*this.anims.create({
      key: 'explosion-red',
      frames: this.anims.generateFrameNumbers('explosion-red', {start: 0, end: 8}),
      frameRate: 12,
      repeat: 0
    })*/

    // Loading

    this.goToScene("Game");
  }

  private goToScene(name: string) {
    this.scene.start(name);
  }

};