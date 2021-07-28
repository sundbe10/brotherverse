import * as Phaser from 'phaser';

export interface ISoundService {
    sfxMuted: boolean;
    musicMuted: boolean;

    addMusic(scene: Phaser.Scene, key: string, audioKey: string, config?: Phaser.Types.Sound.SoundConfig): Phaser.Sound.BaseSound;
    playMusic(key: string, stopCurrentMusic?: boolean): Phaser.Sound.BaseSound;
    stopMusic(key: string);
    playSfx(scene: Phaser.Scene, audioKey: string, config?: Phaser.Types.Sound.SoundConfig);
    muteMusic(value?: boolean);
    muteSfx(value?: boolean);
}