import * as dat from 'dat.gui'

var audio=new Audio('Jet Engines Start Up Sound Effect SOUND EFFECTS(MP3_160K).mp3');

export default class Debug
{
    constructor(){
        const gui=new dat.GUI()

        var folder = gui.addFolder( 'setting' )

        // this.effects = { weight:10 }
        // folder.add(this.effects, "weight", 0,30,0.1)

        this.sss = { m:5000 , pitchAngle:0 , rollAngle:0 , yawAngle:0 ,thrust:0}
        folder.add(this.sss, "m", 5000,3000000,1)
        folder.add(this.sss, "pitchAngle", -100,100,0.1)
        folder.add(this.sss, "rollAngle", -100,100,0.1)
        folder.add(this.sss, "yawAngle", -100,100,0.1)
        folder.add(this.sss, "thrust", 0,1000000,0.1)
        
        /*folder.add(this.sss, "pitch", -15,15,0.1)
        folder.add(this.sss, "roll", -15,15,0.1)
        folder.add(this.sss, "yaw", -180,180,0.1)
        */

        // this.effects2 = { weight2:10 }
        // folder.add(this.effects, "weight", 0,30,0.1)
    }
    update(){
        // audio.volume=0.1
        if(this.sss.thrust>500){
            if(audio.currentTime<1)
                audio.play();
        }
        if(audio.currentTime>40){
            audio.load();
            audio.currentTime=10;
            audio.play();
        }

        // if(){
        //     audio.load();
        //     audio.currentTime=70;
        //     audio.play();
        // }
    }
}