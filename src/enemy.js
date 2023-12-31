export default class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, pool) {
        var a =Math.floor(Math.random() * (25 - 0 + 1) + 0);
        super(scene, x, y, ''+a);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pool=pool;
        this.dead = false;
        this.speed=1;
        this.directonX=0;
        this.directonY=100;
    }
    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        console.log(this.dead)
        if (!this.dead)
           { this.body.setVelocityY(this.directonY*this.speed);
            this.body.setVelocityX(this.directonX*this.speed);
           }
           else{
            this.body.setVelocityY(-this.directonY*this.speed*10);
            this.body.setVelocityX(-this.directonX*this.speed*10);
           }
    }
    death() {
       
    }


}