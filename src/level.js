import Player from "./player.js";
import Punch from "./punch.js";
import Enemy from "./enemy.js";
import Pool from "./pool.js";
export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: "Level" });
        this.levelEnded=false;
        this.transitionTime=200;
    }
    init(data) {

    }
    create() {
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
        this.playerInit();
        this.enemyPool = new Pool(this, 100, false);
        let enemies = []
        for (let i = 0; i < 100; i++) {
            let enemy = new Enemy(this, 0, 0, this.enemyPool);
            enemies.push(enemy);
        }
        this.enemyPool.addMultipleEntity(enemies);
        this.enemyPool.spawn(this.cameras.main.centerX, 0);
        this.physics.add.collider(this.punch, this.enemyPool.getPhaserGroup(), this.EnemyDie,null,this);
        this.physics.add.collider(this.player, this.enemyPool.getPhaserGroup(), this.YouDie,null,this);
    }
    update(t, dt) {
this.returnTitle()

    }
    YouDie(player,enemy)
    {
        player.destroy();
        this.levelFinish();
    }
    EnemyDie(punch, enemy)
    { 
        enemy.dead=true;
    }
    playerInit() {
        var playerInput = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
        this.punch = new Punch(this,0, 0);
        this.player = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY, playerInput, this.punch);

    }
    levelFinish() {
        let text = this.add.text(this.cameras.main.centerX, 80,"GAME OVER", {
            fontFamily: 'gummy',
        });
        text.setOrigin(0.5, 0.5);
        text.setAlign('center');
        text.setFontSize(40);
        text.setStroke("#000000", 4)
        text.setFill('#FFFFFF');
        this.levelEnded = true;
    }
    returnTitle() {
        if (this.levelEnded) {
            this.transitionTime--;
            if (this.transitionTime <= 0) {
                this.levelEnded = false;
                this.transitionTime=200;
                this.scene.start('Title');
            }
        }
    }
}