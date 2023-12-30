export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, cursors) {
        super(scene,x,y,'player');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors=cursors;
    }
    preUpdate(t,dt)
    {
        super.preUpdate(t,dt)
    }
}