import Experience from "../Experience";
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js' 

export default class Environment{
    constructor(){
        this.experience=new Experience()
        this.scene=this.experience.scene

        this.setMoonLight()
        
        this.gltfloader=new GLTFLoader();
        this.gltfloader.load(
            '/sky_box_8k_-_mountains_morning_scene/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    // gltf.scene.children[0].position.y=
                    // gltf.scene.children[0].position.z=2
                    gltf.scene.children[0].position.x=100
                    gltf.scene.children[0].scale.set(12,12,12)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        // The Scene Of Graphic Project
        const textureLoaing = new THREE.TextureLoader()
        const texture = textureLoaing.load('/gazon_007_Room_Entity_Material_baseColor.jpeg')
        
        texture.repeat.x = 5000
        texture.repeat.y = 5000
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.magFilter = THREE.NearestFilter
        /**
         * Particles
         */
        /*const particles = new THREE.BufferGeometry()
        const count = 100000
        const position = new Float32Array(count * 3)

        for (let i = 1; i < count * 3; i++) {
            position[i] = (Math.random() - 0.5) * 10000
        }

        particles.setAttribute(
            'position',
            new THREE.BufferAttribute(position, 3)
        )
        const particlesMatrial = new THREE.PointsMaterial()
        particlesMatrial.size = 0.5
        particlesMatrial.sizeAttenuation = false
        const particle = new THREE.Points(particles, particlesMatrial)
        particle.position.y = 5100
        this.scene.add(particle)*/
        //Objects
        
        //Floorer
        
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(5000, 5000),
            new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide})
        )
        mesh.position.y = -0.2
        mesh.position.x = 100
        mesh.rotation.x = Math.PI / 2
        this.scene.add(mesh);

        
        this.gltfloader.load(
            '/airport/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-0.15
                    gltf.scene.children[0].position.z=3.5
                    // gltf.scene.children[0].position.x=
                    gltf.scene.children[0].scale.set(0.05,0.05,0.05)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        this.gltfloader.load(
            '/airport/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-0.15
                    gltf.scene.children[0].position.z=3.5
                    gltf.scene.children[0].position.x=-5
                    gltf.scene.children[0].scale.set(0.05,0.05,0.05)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        
        const texture2 = textureLoaing.load('/Material.005_baseColor.jpeg')

        const mesh2 = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 120),
            new THREE.MeshBasicMaterial({map: texture2, side: THREE.DoubleSide})
        )
        mesh2.position.y = -0.19
        mesh2.position.x = 15
        mesh2.rotation.x = Math.PI / 2
        mesh2.rotation.z = Math.PI / 2
        mesh2.scale.set(0.4,0.4,0.4)
        this.scene.add(mesh2);

        const mesh3 = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 120),
            new THREE.MeshBasicMaterial({map: texture2, side: THREE.DoubleSide})
        )
        mesh3.position.y = -0.19
        mesh3.position.x = 15
        mesh3.position.z = 7
        mesh3.rotation.x = Math.PI / 2
        mesh3.rotation.z = Math.PI / 2
        mesh3.scale.set(0.4,0.4,0.4)
        this.scene.add(mesh3);

        this.gltfloader.load(
            '/the_barn_house/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=2.8;
                gltf.scene.position.x=-7;
                gltf.scene.scale.set(0.1,0.1,0.1);
                // gltf.scene.rotate.y=Math.PI
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/ccity_building_set_1/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=-1.5;
                gltf.scene.position.x=10;
                gltf.scene.scale.set(0.0005,0.0005,0.0005);
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/ccity_building_set_1/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=-1.5;
                gltf.scene.position.x=25;
                gltf.scene.scale.set(0.0005,0.0005,0.0005);
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/city/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=-12;
                gltf.scene.position.x=12;
                gltf.scene.scale.set(0.05,0.05,0.05);
                // gltf.scene.rotate.y=Math.PI
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/city/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=-12;
                gltf.scene.position.x=32;
                gltf.scene.scale.set(0.05,0.05,0.05);
                // gltf.scene.rotate.y=Math.PI
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/voxel_kakariko_full_scene/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=20;
                gltf.scene.position.x=80;
                gltf.scene.scale.set(0.3,0.3,0.3);
                // gltf.scene.rotate.y=Math.PI
                this.scene.add(gltf.scene);
            }
        )
        this.gltfloader.load(
            '/village__town_assets/scene.gltf',
            (gltf)=>{
                gltf.scene.position.y=-0.19;
                gltf.scene.position.z=-20;
                gltf.scene.position.x=80;
                gltf.scene.scale.set(0.5,0.5,0.5);
                // gltf.scene.rotate.y=Math.PI
                this.scene.add(gltf.scene);
            }
        )
        /*this.gltfloader.load(
            '/airport_bigger/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-0.1
                    gltf.scene.children[0].position.z=2
                    gltf.scene.children[0].position.x=-5
                    gltf.scene.children[0].scale.set(0.04,0.04,0.04)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )*/
        /*
        this.gltfloader=new GLTFLoader()
        this.mixer=null
        this.gltfloader.load(
            '/consuegra_dam/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-1
                    gltf.scene.children[0].position.z=2
                    //gltf.scene.children[0].scale.set(0.001,0.001,0.001)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        this.gltfloader.load(
            '/fossil_rock_in_dubai/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-1
                    gltf.scene.children[0].position.z=2
                    gltf.scene.children[0].position.x=600
                    //gltf.scene.children[0].scale.set(0.001,0.001,0.001)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        this.gltfloader.load(
            '/fossil_rock_in_dubai/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=-1
                    gltf.scene.children[0].position.z=2
                    gltf.scene.children[0].position.x=-600
                    //gltf.scene.children[0].scale.set(0.001,0.001,0.001)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )
        this.gltfloader.load(
            '/mercurio_v1.1/scene.gltf',
            (gltf)=>{
                while(gltf.scene.children.length){
                    gltf.scene.children[0].position.y=200
                    gltf.scene.children[0].position.z=-1000
                    gltf.scene.children[0].position.x=300
                    gltf.scene.children[0].scale.set(0.5,0.5,0.5)
                    this.scene.add(gltf.scene.children[0])
                }
            }
        )*/
    }
    setMoonLight(){
        this.moonLight=new THREE.DirectionalLight('#ffffff',3)
        this.moonLight.castShadow=true
        this.moonLight.shadow.camera.far=5
        this.moonLight.shadow.mapSize.set(1024,1024)
        this.moonLight.shadow.normalBias=0.05
        this.moonLight.position.set(2,40,40)
        this.scene.add(this.moonLight)
        /*this.moonLight = new THREE.AmbientLight( 0xffffff, 0.4 );
        scene.add( this.moonLight );

        this.dirLight = new THREE.DirectionalLight( 0xefefff, 1.5 );
        this.dirLight.position.set( 10, 10, 10 );
        scene.add( this.dirLight );*/
    }
}