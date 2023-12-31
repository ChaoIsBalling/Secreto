export default class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, pool) {
        var a =Math.floor(Math.random() * (25 - 0 + 1) + 0);
        super(scene, x, y, ''+a);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pool=pool;
        this.dead = false;
        this.speed=100;
        this.directionX=0;
        this.directionY=0;
    }
    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        if (!this.dead)
           { this.body.setVelocityY(this.directionY*this.speed);
            this.body.setVelocityX(this.directionX*this.speed);
           }
           else{
            this.body.setVelocityY(-this.directionY*this.speed*20);
            this.body.setVelocityX(-this.directionX*this.speed*20);
           }
    }
    death() {
       
    }


}