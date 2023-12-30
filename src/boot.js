export default class Boot extends Phaser.Scene
{
    constructor(){
        super({key: "Boot"});
    }
    preload()
    {
        //IMAGES
        this.load.image('bg','assets/images/background.png');
         //SOUNDS
         this.load.audio('title', 'assets/sounds/title.mp3'); 

    }
    create()
    {
        this.scene.start('PreTitle')
    }
}