import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Debug from './Utils/Debug'
import Airplane from "./world/physics";

let instance = null

export default class Experience {
    constructor(canvas) {
        //Singleton
        if (instance) {
            return instance
        }

        instance = this
        //Global access
        window.experience = this
        //Options
        this.canvas = canvas

        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        this.phisics = new Airplane();


        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            if (this.time.delta) {
                this.update()
            }

        })

    }
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    updateFromGUI() {
        //this.phisics.m = this.debug.sss.mass;
        // this.phisics.pitch = this.debug.sss.pitch;
        // this.phisics.roll = this.debug.sss.roll;
        // this.phisics.yaw = this.debug.sss.yaw;

        this.phisics.pitchAngle = this.debug.sss.pitchAngle;
        this.phisics.yawAngle = this.debug.sss.yawAngle;
        this.phisics.rollAngle = this.debug.sss.rollAngle;

        this.phisics.current_thrust = this.debug.sss.thrust;
        this.phisics.m = this.debug.sss.m;
    }

    update() {
        if (this.phisics.pos.magnitude() > 1000000) {
            console.log("ERROR");
            return;
        }

        console.log("#############################################");

        this.camera.update(this.phisics.pos.x, this.phisics.pos.y, this.phisics.pos.z,this.world.x,this.world.y,this.world.z)
        this.renderer.update()
        this.world.update(this.phisics.pos.x, this.phisics.pos.y, this.phisics.pos.z, this.phisics.roll, this.phisics.yaw, this.phisics.pitch);
        this.phisics.update();
        this.debug.update();
        this.updateFromGUI();

        //        

    }
}