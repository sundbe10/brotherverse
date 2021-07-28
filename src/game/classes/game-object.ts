import * as Phaser from 'phaser';

export class GameObject extends Phaser.GameObjects.Container {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        scene.add.existing(this);
    }

}