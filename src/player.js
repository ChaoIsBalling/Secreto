export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, cursors,punch) {
        super(scene,x,y,'player');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors=cursors;
        this.punch = punch;
         this.punch.setActive(false);
         this.punch.setVisible(false); 
         this.x=x;
         this.y=y;
    }
    preUpdate(t,dt)
    {
        super.preUpdate(t,dt);
        if(this.cursors.up.isDown)
        {
            this.punching(this.x,this.y-50,0);
        }
        else if(this.cursors.down.isDown)
        {
            this.punching(this.x,this.y+50,135);
        }
        else if(this.cursors.right.isDown)
        {
            this.punching(this.x+50,this.y,1.5);
        }
        else if(this.cursors.left.isDown)
        {
            this.punching(this.x-50,this.y,80);
        }
        
    }
    punching(x,y,deg)
    {  
        this.punch.setActive(true);
        this.punch.setVisible(true); 
        this.punch.rotation=deg;
        this.punch.x=x;
        this.punch.y=y;
    }
}