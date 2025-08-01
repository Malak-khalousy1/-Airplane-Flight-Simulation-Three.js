import './style.css'
import Experience from './Experience/Experience'
import * as dat from 'dat.gui'

// const gui=new dat.GUI()
//gui.add(height,'height',0,20,0.01)

// var folder = gui.addFolder( 'setting' )
//folder.add(height, "height", 0,30).step(0.1).name("Inseam Inch ").listen();

// var effects = {  height:10 }; 
// folder.add(effects, "height", 0,31.8).step(0.1).name("Inseam Inch ").listen();
//ctrl.domElement.style.pointerEvents = "none";

const experience=new Experience(document.querySelector('canvas.webgl'))
