export default class Boot extends Phaser.Scene
{
    constructor(){
        super({key: "Boot"});
    }
    preload()
    {
        //IMAGES
        this.load.image('bg','assets/images/background.png');
        this.load.image('player','assets/images/player.png');
        this.load.image('fist','assets/images/punch.png')
        this.load.image('boom','assets/images/explosion.png')
        //Letters
        this.load.image('0','assets/images/Letters/A.png')
        this.load.image('1','assets/images/Letters/B.png')
        this.load.image('2','assets/images/Letters/C.png')
        this.load.image('3','assets/images/Letters/D.png')
        this.load.image('4','assets/images/Letters/E.png')
        this.load.image('5','assets/images/Letters/F.png')
        this.load.image('6','assets/images/Letters/G.png')
        this.load.image('7','assets/images/Letters/H.png')
        this.load.image('8','assets/images/Letters/I.png')
        this.load.image('9','assets/images/Letters/J.png')
        this.load.image('10','assets/images/Letters/K.png')
        this.load.image('11','assets/images/Letters/L.png')
        this.load.image('12','assets/images/Letters/M.png')
        this.load.image('13','assets/images/Letters/N.png')
        this.load.image('14','assets/images/Letters/O.png')
        this.load.image('15','assets/images/Letters/P.png')
        this.load.image('16','assets/images/Letters/Q.png')
        this.load.image('17','assets/images/Letters/R.png')
        this.load.image('18','assets/images/Letters/S.png')
        this.load.image('19','assets/images/Letters/T.png')
        this.load.image('20','assets/images/Letters/U.png')
        this.load.image('21','assets/images/Letters/V.png')
        this.load.image('22','assets/images/Letters/W.png')
        this.load.image('23','assets/images/Letters/X.png')
        this.load.image('24','assets/images/Letters/Y.png')
        this.load.image('25','assets/images/Letters/Z.png')
         //SOUNDS
         this.load.audio('title', 'assets/sounds/title.mp3'); 
         this.load.audio('explode', 'assets/sounds/ahh.mp3'); 
         this.load.audio('music', 'assets/sounds/music.mp3'); 

    }
    create()
    {
        this.scene.start('PreTitle')
    }
}