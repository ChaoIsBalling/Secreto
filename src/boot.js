export default class Boot extends Phaser.Scene
{
    constructor(){
        super({key: "Boot"});
    }
    preload()
    {
         //SOUNDS
         this.load.audio('title', 'assets/sounds/title.mp3'); 

    }
    create()
    {
        this.scene.start('Title')
    }
}