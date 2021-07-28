import * as Phaser from 'phaser';
import { EventEmitter } from 'events';
import { ISceneService } from './scene.service.interface';
import { SceneTransition } from '../classes/scene-transition';

export class SceneService extends EventEmitter implements ISceneService {

    constructor() {
        super();
    }
    transition(scene: Phaser.Scene, transition: SceneTransition, duration: number, newScene?: string): void {
        switch(transition) {
            case SceneTransition.FADE_IN : {
                scene.cameras.main.fadeIn(duration, 0, 0, 0);
                if(newScene) {
                    scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, (cam, effect) => {
                        scene.scene.start(newScene);
                    })
                }
                break;
            }
            case SceneTransition.FADE_OUT : {
                scene.cameras.main.fadeOut(duration, 1, 1, 1);
                if(newScene) {
                    scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        scene.scene.start(newScene);
                    })
                }
                break;
            }
        }
    }


}