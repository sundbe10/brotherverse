import * as Phaser from 'phaser';
import { SceneTransition } from '../classes/scene-transition';

export interface ISceneService {
    transition(scene: Phaser.Scene, transition: SceneTransition, duration: number, newScene?:string): void;
}