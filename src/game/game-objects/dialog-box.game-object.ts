import * as Phaser from 'phaser';
import { Dialog } from '../classes/dialog';
import { GameObject } from '../classes/game-object';

export class DialogGameObject extends GameObject {

    private dialog: Dialog[] = [];
    private text: Phaser.GameObjects.Text;
    private dialogCount = 0;
    private eventCounter: number = 0;
    private delayEvent: Phaser.Time.TimerEvent;
    private timedEvent: Phaser.Time.TimerEvent;
    private dialogArray: string[] = [];
    private ended: boolean = true;

    constructor(
        scene: Phaser.Scene,
        texture: string,
        textStyle: Phaser.Types.GameObjects.Text.TextStyle,
        x: number,
        y: number,
        width: number,
        height: number,
        padding: number = 45
    ) {
        super(scene, x, y);
    
        var box = scene.add.sprite(0, 0, texture).setOrigin(0.5, 0);
        textStyle.wordWrap = { width: width - (padding * 2) };
        textStyle.fixedWidth = width - 2 * padding;
        this.text =  scene.add.text(
            0, 
            padding,
            "",
            textStyle
        ).setOrigin(0.5,0);

        this.add([box, this.text]);
        this.setVisible(false);
    }

    preDestroy() {
        if (this.timedEvent) this.timedEvent.remove(false);
        if (this.delayEvent) this.delayEvent.remove(false);
        super.preDestroy();
    }

    setText(dialog: Dialog[]) {
        this.setVisible(true);
        this.dialog = this.dialog.concat(dialog);
        if(this.ended) {
            this.ended = false;
            this.startText(this.dialog[this.dialogCount], this.textComplete.bind(this));
        }
    }

    private textComplete() {
        const dialog = this.dialog[this.dialogCount];
        this.delayEvent = this.scene.time.delayedCall(dialog.delay, () => {
            if(dialog.onComplete) {
                dialog.onComplete();
            }
            this.dialogCount++;
            if(this.dialogCount < this.dialog.length) {
                this.startText(this.dialog[this.dialogCount], this.textComplete.bind(this));
            }
            else {
                this.ended = true;
            }
        }, [], this)
    }

    private startText(dialog: Dialog, callback: Function) {
        let dialogText = dialog.text;

        // Play audio
        if(dialog.audio) {
            //this.soundService.playSfx(this.scene, dialog.audio);
        }

        // Start callback
        if(dialog.onStart) {
            dialog.onStart();
        }

        // Reset the dialog
        this.eventCounter = 0;
        this.dialogArray = dialogText.split('');
        if (this.timedEvent) this.timedEvent.remove();

        let tempText =  '' ;
        this.text.setText(tempText);
        this.timedEvent = this.scene.time.addEvent({
            delay: 150 - ((dialog.textSpeed || 1) * 90),
            callback: this.animateText,
            callbackScope: this,
            loop: false,
            repeat: this.dialogArray.length - 1,
            args: [callback]
        });
    }

    private animateText(callback: Function) {
        this.eventCounter++;
        this.text.setText(this.text.text + this.dialogArray[this.eventCounter - 1]);
        if(this.dialogArray.length === this.eventCounter) {
            this.timedEvent.remove(false);
            callback();
        }
      }
}