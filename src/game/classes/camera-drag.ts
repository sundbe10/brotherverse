export class CameraDrag {
    
    private pointer = { 
        active: false, 
        pointerStart: { x: 0, y: 0 },
        cameraStart: { x: 0, y: 0 }
    };

    constructor(private scene: Phaser.Scene, boundarySprite?: Phaser.GameObjects.Sprite) {
        // Events
        scene.input.on('pointerdown', this.handlePointerDown.bind(this));
        scene.input.on('pointerup', () => {
            this.pointer.active = false;
        });
        scene.input.on('pointermove', this.handleDrag.bind(this));
    }

    private handlePointerDown(event: PointerEvent) {
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

    private handleDrag(event: PointerEvent) {
        if(this.pointer.active) {
            this.scene.cameras.main.scrollX = this.pointer.cameraStart.x - (event.x - this.pointer.pointerStart.x);
            this.scene.cameras.main.scrollY = this.pointer.cameraStart.y - (event.y - this.pointer.pointerStart.y);
        }
    }
}