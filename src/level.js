import Player from "./player.js";

export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: "Level" });

    }
    init(data) {

    }
    create() {
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
        this.playerInit();
    }
    update(t, dt) {


    }
    playerInit() {
        var playerInput = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        })
        this.player= new Player(this, this.cameras.main.centerX, this.cameras.main.centerY,playerInput);

    }
}