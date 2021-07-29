import { Pinch } from 'phaser3-rex-plugins/plugins/gestures.js';

export class CameraDrag {

    private pointer = { 
        active: false, 
        pointerStart: { x: 0, y: 0 },
        cameraStart: { x: 0, y: 0 }
    };

    constructor(private scene: Phaser.Scene, boundarySprite?: Phaser.GameObjects.Sprite) {
        
        // Pinch
        const pinch = new Pinch(scene, {
            enable: true
        });
        pinch.on('pinch', console.log, this);

        // Events
        scene.input.on('pointerdown', this.handlePointerDown.bind(this));
        scene.input.on('pointerup', this.handlePointerUp.bind(this));
        scene.input.on('pointermove', this.handleDrag.bind(this));
    }

    private handlePointerDown(event: PointerEvent) {
        console.log(event);
        this.pointer = {
            active: true,
            pointerStart: {
                x: event.x,
                y: event.y
            },
            cameraStart: {
                x: this.scene.cameras.main.scrollX,
                y: this.scene.cameras.main.scrollY
            }
        }
    }

    private handlePointerUp() {
        this.pointer.active = false;
    }

    private handleDrag(event: PointerEvent) {
        if(this.pointer.active) {
            this.scene.cameras.main.scrollX = this.pointer.cameraStart.x - (event.x - this.pointer.pointerStart.x);
            this.scene.cameras.main.scrollY = this.pointer.cameraStart.y - (event.y - this.pointer.pointerStart.y);
        }
    }
}