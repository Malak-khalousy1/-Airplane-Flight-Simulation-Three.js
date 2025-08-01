import * as THREE from 'three'
import Experience from './Experience'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

var num = Math.PI, num4 = 0
let count = 0
var is2 = null, is3 = null, is4 = null
var is5 = null
window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW') {
        if (is2 == false) {
            is2 = true
        } else {
            is2 = false
        }
    }
    if (e.code == 'KeyG') {
        if (is5 == false) {
            is5 = true
        } else {
            is5 = false
        }
    }
})

window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyD') {
        if (is3 == false) {
            is3 = true
        } else {
            is3 = false
        }
    }
    if (e.code == 'KeyA') {
        if (is4 == false) {
            is4 = true
        } else {
            is4 = false
        }
    }
})

export default class Camera {
    constructor() {
        this.x=0;
        this.y=1;
        this.z=0;
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setObritControls()

    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(75,
            this.sizes.width / this.sizes.height, 0.1, 5000)
        this.instance.position.set(0, 0, 1)
        this.scene.add(this.instance)
    }
    setObritControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = false
        this.controls.panSpeed = 0.1
        // this.controls.maxZoom=15
        // this.controls.maxDistance=15

        // this.controls.keys = {
        //     LEFT: 'ArrowLeft', //left arrow
        //     UP: 'ArrowUp', // up arrow
        //     RIGHT: 'ArrowRight', // right arrow
        //     BOTTOM: 'ArrowDown' // down arrow
        // }
        // this.controls.keyPanSpeed=0.1
        // this.controls.listenToKeyEvents(window);

        // this.controls.mouseButtons = {
        //     LEFT: THREE.MOUSE.ROTATE,
        //     MIDDLE: THREE.MOUSE.DOLLY,
        //     RIGHT: THREE.MOUSE.PAN
        // }
        // this.controls.hasEventListener()
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }
    update(x, y, z,x2,y2,z2) {
        this.controls.update()
        //  this.controls.target.set(x, y, z)

          this.instance.position.set(x-3,y+0.3,z);
         this.controls.target.set(x, y, z);

        

        /*if (is2 == true) {
            count += 0.0005
        } else {
            if (count > 0) {
                count += -0.0005 * 2
            } else {
                count = 0
            }
        }*/
        // this.instance.position.z += -count * Math.cos(num + Math.PI)
        // this.instance.position.x += count * Math.sin(num + Math.PI)

       /* this.instance.position.z += -(z-this.z)
        this.instance.position.x += x-this.x
        this.instance.position.y += y-this.y

        this.x=x;
        this.y=y;
        this.z=z; */



        /*if (is3 == true) {
            num += Math.PI * 0.005
        }
        if (is4 == true) {
            num += -Math.PI * 0.005
        }
        if (is5 == true) {
            num4 += 0.0005
        } else {
            if (num4 > 0) {
                num4 += -0.0005
            } else {
                num4 = 0
            }
        }*/
        /*if (this.instance.position.y < 3) {
            this.instance.position.y += num4
        } else {
            this.instance.position.y += num4
            is5 = false
        }*/

        // this.instance.lookAt(x,y,z)
    }
}