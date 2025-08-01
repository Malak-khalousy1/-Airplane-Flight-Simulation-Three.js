import Experience from "../Experience";
import* as THREE from 'three' 
import Environment from "./Environment";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js' 

var plane = null
// var axesHelper = new THREE.AxesHelper( 10 );

var turn=0
var num=Math.PI*0.5,num2=0,num3=0,num4=0,num5=0,num7=0
let count=0
var is1=null,is2=null,is3=null,is4=null
var is5=null,is6=null,is7=null
window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW') {
        if(is2==false){
            is2=true
        }else{
            is2=false
        }
    }
    if(e.code == 'KeyG'){
        if(is5==false){
            is5=true
            turn=0
        }else{
            is5=false
            turn=1
        }
    }
    if(e.code == 'KeyH'){
        if(is6==true){
            is6=false
        }else{
            is6=true
        }
    }
})

window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyD') {
        if(is3==false){
            is3=true
        }else{
            is3=false
        }
    }
    if (e.code == 'KeyA') {
        if(is4==false){
            is4=true
        }else{
            is4=false
        }
    }  
})
export default class World{
    constructor(){
        this.x
        this.y
        this.z
        this.experience=new Experience()
        this.scene=this.experience.scene
        // Plane
        this.mesh=null
        var gltfloader=new GLTFLoader()
        gltfloader.load(
            '/plane/scene.gltf',
            (gltf)=>{
                this.mesh = gltf.scene;
                this.mesh.scale.set(0.1,0.1,0.1)
                this.mesh.position.set(0,-0.19,0);
                this.mesh.rotation.y=Math.PI*0.5
                this.scene.add(this.mesh);
                plane = gltf.scene;
            }
        )
        
        this.environment=new Environment()
    }

    update(xP, yP, zP, rollDeg, yawDeg, pitchDeg) {

        var yaw = ( (yawDeg+90) * 3.14159) / 180;
        var roll = (rollDeg * 3.14159) / 180;
        var pitch = (pitchDeg * 3.14159) / 180;


        if (plane !== null) {
            plane.position.x = xP;
            plane.position.y = yP ;
            plane.position.z = zP;

            plane.rotation.reorder('YZX')
            plane.rotation.z = roll;
            plane.rotation.y = yaw;
            plane.rotation.x = -pitch;
        }
        /*this.x=plane.x;
        this.y=plane.y;
        this.z=plane.z;*/
    }
    
}