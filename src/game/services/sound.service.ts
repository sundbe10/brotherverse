import * as Phaser from 'phaser';
import { ISoundService } from "./sound.service.interface";
import * as _ from 'lodash';

export class SoundService implements ISoundService {

    sfxMuted: boolean = false;
    musicMuted: boolean = false;
    
    private musicArray: { key: string, music: Phaser.Sound.WebAudioSound }[] = [];

    addMusic(scene: Phaser.Scene, key:string, audioKey: string, config?: Phaser.Types.Sound.SoundConfig): Phaser.Sound.BaseSound {
        let musicObject = _.find(this.musicArray, { key: key})
        if(musicObject) {
            return musicObject.music;
        }
        else {
            musicObject = { key: key, music: scene.sound.add(audioKey, config) as Phaser.Sound.WebAudioSound };
            this.musicArray.push(musicObject);
            return musicObject.music;
        }
    }

    playMusic(key:string, stopCurrentMusic: boolean = true): Phaser.Sound.BaseSound {
        let musicObject = _.find(this.musicArray, { key: key})
        if(musicObject) {
            this.musicArray.forEach(m => {
                if(m.key != key && stopCurrentMusic) {
                    m.music.stop();
                }
                else if(m.key == key && !m.music.isPlaying) {
                    m.music.play();
                } 
            });
            return musicObject.music;
        }
        else {
            console.error(`Could not find music with key "${key}"`);
            return null;
        }
    }

    stopMusic(key: string) {
        const musicObject = _.find(this.musicArray, { key: key});
        if(musicObject) {
            musicObject.music.stop();
        }
        else {
            console.error(`Could not find music with key "${key}"`);
        }
    }

    playSfx(scene: Phaser.Scene, audioKey: string, config?: Phaser.Types.Sound.SoundConfig) {
        // Return if sfx should be muted
        if(this.sfxMuted) return;
        scene.sound.play(audioKey, config);
    }

    muteMusic(mute?: boolean) {
        if(mute === undefined) {
            this.musicMuted = !this.musicMuted;
        }
        else {
            this.musicMuted = mute;
        }
        this.musicArray.forEach(music => {
            music.music.mute = mute;
        });
    }
    
    muteSfx(mute?: boolean) {
        if(mute === undefined) {
            this.sfxMuted = !this.sfxMuted;
        }
        else {
            this.sfxMuted = mute; 
        }
    }


}