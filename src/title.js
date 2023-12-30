export default class Title extends Phaser.Scene {
    constructor() {
        super({ key: "Title" });
    }
    create() {
        this.Music = this.sound.add('title');
        this.Music.play();
        let text = this.add.text(this.cameras.main.centerX, 50, "ALFA", {
            fontFamily: 'gummy',
        });
        text.setOrigin(0.5, 0.5);
        text.setAlign('center');
        text.setFontSize(100);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        text.setStroke("#" + randomColor, 4)
        text.setFill('#000000');

        let text2 = this.add.text(this.cameras.main.centerX, 150, "BET", {
            fontFamily: 'gummy',
        });
        text2.setOrigin(0.5, 0.5);
        text2.setAlign('center');
        text2.setFontSize(100);
        text2.setStroke("#" + randomColor, 4)
        text2.setFill('#000000');
        var tween = this.tweens.add(
            {
                targets: text2,
                alpha: { from: 0, to: 1 },
                ease: 'Linear',
                duration: 10000,
                repeat: 0,
                yoyo: false,
            });
        this.textButton(this.cameras.main.centerX, 300, 'Start', '#8f34eb', '#000000');
    }
    textButton(x, y, message, stroke, fill) {
        let text = this.add.text(x, y, message, {
            fontFamily: 'gummy',
        });
        text.setOrigin(0.5, 0.5);
        text.setAlign('center');
        text.setFontSize(20);

        //Color del reborde de la letra y grosor si estamos en la escena con ese tipo de texto.
        text.setStroke(stroke, 4)
        text.setFill(fill);

        text.setInteractive();
        text.on('pointerdown', () => {
            this.Music.stop();
            this.scene.start('Level')
        })
    }
}