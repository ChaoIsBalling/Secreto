export default class Punch extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'fist');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.time=20;
    }
    preUpdate(t,dt)
    {
        super.preUpdate(t,dt);
       if(this.active)
       {
        this.time--;
        if(this.time==0)
        {
            this.time=20;
            this.setActive(false);
            this.setVisible(false); 
        }
       }
    }
}