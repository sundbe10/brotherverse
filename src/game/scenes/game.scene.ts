import * as Phaser from 'phaser';
import { phaserConfig } from '../../config/phaser.config';
import { CameraDrag } from '../classes/camera-drag';
import { MapGameObject } from '../game-objects/map.game-object';

export enum GameSceneState {
    INTRO,
    ACTIVE,
    END
}

export class GameScene extends Phaser.Scene {

    // State
    state: GameSceneState;

    constructor ( ) {
        super('Game');
    }

    create () {
        const map = new MapGameObject(this, phaserConfig.width/2, phaserConfig.height/2)
        const cameraDrag = new CameraDrag(this);
    }

    update() {

    }

    private changeState(state: GameSceneState) {
        this.state = state;
        switch(this.state){
            case GameSceneState.INTRO: {
                break;
            }
        }
    }

}