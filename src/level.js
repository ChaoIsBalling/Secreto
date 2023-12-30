export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: "Level" });
       
    }
    init(data) {
        
    }
    create() {
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
    }
    update(t,dt) {

       
    }
   
}