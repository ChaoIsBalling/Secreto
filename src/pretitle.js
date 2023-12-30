export default class PreTitle extends Phaser.Scene {
    constructor() {
        super({ key: "PreTitle" });
    }
    create() {
        this.textButton(this.cameras.main.centerX, 200, 'Press This', '#FFFFFF');
    }
    textButton(x, y, message,  fill) {
        let text = this.add.text(x, y, message);
        text.setOrigin(0.5, 0.5);
        text.setAlign('center');
        text.setFontSize(20);

        //Color del reborde de la letra y grosor si estamos en la escena con ese tipo de texto.
        text.setFill(fill);

        text.setInteractive();
        text.on('pointerdown', () => {
            this.scene.start('Title')
        })
    }
}