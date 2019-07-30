/* eslint-disable no-undef */
import React, { Component } from "react";
// import React3 from "react-three-renderer";
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import  TransformControls  from './TransformControls.js'
import fileGlb from './shop.glb';





class ShopB extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.addCube = this.addCube.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
    // STATE FOR UPDATING INPUTS VALUE AND SET MODEL POSITION
    this.state = {position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  scale: { x: 0, y: 0, z: 10 } }
  }
  // FUNCTION FOR SAVE VALUES FORM INPUTS
  stateUpdate = (event, direction, axis, ajustFunc) => {
    // CHANGING EVENT TO MOUSE DATA IF...
    const targetValue = typeof event === "number" ? event : event.target.value;
    const isNum = targetValue === "" ? "" : Number(targetValue);
    this.setState(state => {
      return state[direction] = { ...state[direction], [axis]: isNum }
    }, () => ajustFunc(direction, axis));
  };
    
    
  

 
componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.7, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0xf0f012);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.initializeOrbits();
    this.initializeCamera();

    

        // ADD LOADER FROM NPM FOLDER
        this.loader = new GLTFLoader();

        // LODING GLB FILE FROM SRC FOLDER
        this.loader.load(fileGlb, gltf => {
          this.gltf = gltf.scene
    
          // ADD MODEL TO THE SCENE
          this.scene.add(gltf.scene);
    
          // ATTACH MODEL TO TRANSFORM CONTROL
          this.control.attach( gltf.scene );
                this.scene.add( this.control );
    
          //
          gltf.scene.scale.set(1, 1, 1)
          this.orbit.update();
    
          this.renderer.render(this.scene, this.camera);
        }, undefined,
    
        error => {
          console.log(error);
        });



   
    this.animate();
    
  }


   
  

componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }
initializeOrbits() {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }
initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 100;
  }
animate() {
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    
   
  }
addCube(cube) {
    this.scene.add(cube);
  }

renderingScene() {
    renderer.render(this.scene, this.camera);
}
render() {
    return (
      
        <div
          id="boardCanvas"
          className="ButtonBasi"
          ref={mount => {
            this.mount = mount;
          }}
        />
      
    );
  }
}
export default ShopB;