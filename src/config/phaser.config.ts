import * as Phaser from 'phaser';
import * as BBCodeTextPlugin from 'phaser3-rex-plugins/dist/rexbbcodetextplugin.min';
import * as WebFontLoaderPlugin from 'phaser3-rex-plugins/dist/rexwebfontloaderplugin.min';

export const phaserConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    resolution: window.devicePixelRatio, 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: false
        }
    },
    plugins: {
        global: [{
            key: 'rexBBCodeTextPlugin',
            plugin: BBCodeTextPlugin,
            start: true
        },
        {
            key: 'rexwebfontloaderplugin',
            plugin: WebFontLoaderPlugin,
            start: true
        }]
    }
}