import * as Phaser from 'phaser';
import { phaserConfig } from '../../config/phaser.config';
import { GameObject } from '../classes/game-object';
import gameService from '../services/game.service';
import { LocationGameObject } from './location.game-objects';

export class MapGameObject extends GameObject {

    constructor(
        scene: Phaser.Scene
    ) {
        super(scene, -phaserConfig.map.width/2, -phaserConfig.map.height/2);
        
        const map = scene.add.sprite(0, 0, 'map').setOrigin(0,0);
        this.add(map);

        gameService.data.locations.forEach(location => {
            const locationGameObject = new LocationGameObject(location, scene);
            console.log(locationGameObject);
            this.add(locationGameObject);
        })
    }
}