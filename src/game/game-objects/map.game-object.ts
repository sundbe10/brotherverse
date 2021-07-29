import * as Phaser from 'phaser';
import { phaserConfig } from '../../config/phaser.config';
import { GameObject } from '../classes/game-object';

export class MapGameObject extends GameObject {

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {
        super(scene, x, y);
        
        const map = scene.add.sprite(0, 0, 'map');
        this.add(map);
    }
}