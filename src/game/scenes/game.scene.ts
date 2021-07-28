import * as Phaser from 'phaser';

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