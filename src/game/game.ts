import * as Phaser from 'phaser';
import { phaserConfig } from '../config/phaser.config';
import { GameScene } from './scenes/game.scene';
import { PreloadScene } from './scenes/preload.scene';


export class Game extends Phaser.Game {
    constructor () {
        super (phaserConfig);
        this.scene.add('Game', GameScene);
        this.scene.add('Preload', PreloadScene);
        this.scene.start('Preload');
    }
}