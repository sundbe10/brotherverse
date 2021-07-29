import * as Phaser from 'phaser';
import { GameObject } from '../classes/game-object';
import { Location } from '../classes/game-data';

export class LocationGameObject extends GameObject {

    constructor(
        location: Location,
        scene: Phaser.Scene,
    ) {
        super(scene, location.x, location.y);
        
        const marker = scene.add.rectangle(0, 0, 50, 50, 0xFFFFFF);
        this.add(marker);
    }
}