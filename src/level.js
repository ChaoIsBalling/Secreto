import Player from "./player.js";
import Punch from "./punch.js";
import Enemy from "./enemy.js";
import Pool from "./pool.js";
export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: "Level" });
        this.levelEnded = false;
        this.transitionTime = 200;
        this.score=0;
        this.textScore;
    }
    create() {
        this.Music = this.sound.add('music');
              this.Music.play({
                loop:true
              });
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
        let text = this.add.text(40, 30, "Score:", {
            fontFamily: 'gummy',
        });
        text.setOrigin(0.5, 0.5);
        text.setAlign('center');
        text.setFontSize(25);
        text.setFill('#000000');
        this.scoreCount();
        this.playerInit();
        this.enemyPool = new Pool(this, 100, false);
        let enemies = []
        for (let i = 0; i < 100; i++) {
            let enemy = new Enemy(this, 0, 0, this.enemyPool);
            enemies.push(enemy);
        }
        this.enemyPool.addMultipleEntity(enemies);
        //this.enemyPool.spawn(this.cameras.main.centerX, 0);
        this.EnemySpawn();
        this.physics.add.collider(this.punch, this.enemyPool.getPhaserGroup(), this.EnemyDie, null, this);
        this.physics.add.collider(this.player, this.enemyPool.getPhaserGroup(), this.YouDie, null, this);
    }
    update(t, dt) {
        this.returnTitle()
    }
    scoreCount()
    {
        this.textScore = this.add.text(120, 30, ""+this.score, {
            fontFamily: 'gummy',
        });
        this.textScore .setOrigin(0.5, 0.5);
        this.textScore .setAlign('center');
        this.textScore .setFontSize(25);
        this.textScore .setFill('#000000');
    }
    EnemySpawn()
    {
        const spawn =()=>{
           var pos=Math.floor(Math.random() * (3 - 0 + 1) + 0)
           if(pos ==0)
           {
            this.enemyPool.spawn(this.cameras.main.centerX, 0,0,1,this.score/10);
           }
           else if(pos ==1)
           {
            this.enemyPool.spawn(this.cameras.main.centerX, 512,0,-1, this.score/10);
           }
           else if(pos ==2)
           {
            this.enemyPool.spawn(0, this.cameras.main.centerY,1,0,this.score/10);
           }
           else if(pos ==3)
           {
            this.enemyPool.spawn(512+32, this.cameras.main.centerY,-1,0,this.score/10);
           }
           
        }
        this.time.addEvent(
            {
                delay: 2000,
                loop:true,
                callback:spawn,
                callbackScope:this
            }
        )
    }
    YouDie(player, enemy) {
        player.destroy();
        this.levelFinish();
    }
    EnemyDie(punch, enemy) {
        var Music = this.sound.add('explode');
              Music.play();
        this.score+=10;
        this.textScore.setText(this.score)
        enemy.dead = true;
    }
    playerInit() {
        var playerInput = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
        this.punch = new Punch(this, 0, 0);
        this.player = new Player(this, this.cameras.main.centerX, this.cameras.main.centerY, playerInput, this.punch);

    }
    levelFinish() {
        let text = this.add.text(this.cameras.main.centerX, 80, "GAME OVER", {
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
                this.Music.stop();
                this.levelEnded = false;
                this.transitionTime = 200;
                this.score=0;
                this.scene.start('Title');
            }
        }
    }
}