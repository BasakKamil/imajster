import './style.scss'
import React from 'react';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import  TransformControls  from './TransformControls.js'
import fileGlb from './bread.glb' // GLB FILE
import Header from './Components/Header.js';
import Footer from './Components/footer.js';
import NewCanvas from './Components/newCanvas.js';
import HomeFooter from './Components/HomeFooter';
// import video from './Components/Film/2.mp4';
// import { VideoTexture } from 'three';
import Foto1 from './Components/BOX/cosmos.jpg';
import foto2 from './Components/BOX/star.png';
// import AdminPanel from './Components/Admin/AdminPanel.js';
import anime from 'animejs';





class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);


    // STATE FOR UPDATING INPUTS VALUE AND SET MODEL POSITION
    this.state = {position: { x: 0, y: 0, z: 0 },
                  rotation: { x: 0, y: 0, z: 0 },
                  scale: { x: 3, y: 3, z: 3 },
                  products: [],
                  order: [], 
                  showMenuButton: false
                }
                
                  
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


    animate = () => {
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);

    this.cube.rotation.y += 0.05;
    this.starsGeo.vertices.forEach(p=>{
      p.velocity += p.acceleration;
    });
   
  }
  // FUNCTION TO DO STAFF BEFORE RENDERING ELEMENTS
  componentDidMount = () => {
   

    this.animation = anime({
      targets: '',
      translateX: 250,
      rotate: '1turn'
    });

    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setClearColor('#0a2510');
    this.renderer.setSize(this.width,this.height);
    this.renderer.gammaFactor = 1.5;
    this.renderer.gammaOutput = true;
    this.mount.appendChild(this.renderer.domElement);

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera( 90, this.width / this.height, 0.1, 1500 );
    
  

    //ADD SCENE
    this.scene = new THREE.Scene();

      //ADD VIDEO
      
      
      // this.VideoTexture = new THREE.VideoTexture(video);
      // this.VideoTexture.minFilter = THREE.LinearFilter;
      // this.VideoTexture.magFilter = THREE.LinearFilter;
      // this.VideoTexture.format = THREE.RGBAFormat;


  

        // Tu zaczyna sie pudło 
        this.geometry = new THREE.BoxGeometry( 800, 800, 800 );
      // this.material = [
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})}),
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})}),
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})}),
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})}),
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})}),
      //   new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.MeshLambertMaterial({map:this.VideoTexture,side:THREE.DoubleSide})})
      // ];

      this.material = [
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({color: 0xffffff, map:new THREE.TextureLoader().load(Foto1), side: THREE.DoubleSide})
      ];
   
      this.cube = new THREE.Mesh( this.geometry, this.material );
      this.cube.position.z = -120;
      this.scene.add( this.cube );
      this.animate();

    //  Tu dodaje gwiazdy
      this.starsGeo = new THREE.Geometry();
      for(let i=0; i<6000;i++){
        this.star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        this.star.valocity = 0;
        this.star.acceleration = 0.02;
        this.starsGeo.vertices.push(this.star);
      }

        this.starsMaterial = new THREE.PointsMaterial({
            color: 0xffc107,
            size: 0.7,
            map: new THREE.TextureLoader().load(foto2)
        });
        
        this.stars = new THREE.Mesh(this.starsGeo, this.starsMaterial);
   
        this.scene.add(this.stars);


    // LIGHT
    this.light = new THREE.AmbientLight(0xffffff, 3.3);
    this.scene.add(this.light);

  
  
    // // ADD GRID HELPER
    // const size = 10;
    // const divisions = 25;
    // const gridHelper = new THREE.GridHelper( size, divisions );
    // this.scene.add( gridHelper );




    //ADD TRANSFORM CONTROL FROM INDEX.HTML
    this.control = new TransformControls( this.camera, this.renderer.domElement );
    this.control.setSize(1);

    // ADD EVENT LISTNER TO MOVE MODEL AND CHANGE REACT STATE TO CHANGE VALUSE IN INPUTS
    this.control.addEventListener( 'change', () => { this.renderer.render(this.scene, this.camera); });




    // EVENT LISTNER TO DISABLE ORBIT MOVE
    this.control.addEventListener( 'dragging-changed', ( event ) => {
      this.updateSetState();
      this.orbit.enabled = ! event.value});

    // ORBIT CONTROL
    this.orbit = new OrbitControls( this.camera, this.renderer.domElement );
    this.camera.position.set( 220, 22, 2 );
    this.orbit.update();


    //EVENT LISTNER TO VIEW MODEL IN DIFFERENT POSITIONS
    this.orbit.addEventListener("change", () => this.renderer.render(this.scene, this.camera));

    // ADD LOADER FROM NPM FOLDER
    this.loader = new GLTFLoader();
    this.animate();

    // LODING GLB FILE FROM SRC FOLDER
    this.loader.load(fileGlb, gltf => {
      this.gltf = gltf.scene

      // ADD MODEL TO THE SCENE
      this.scene.add(gltf.scene);

      // ATTACH MODEL TO TRANSFORM CONTROL
      this.control.attach( gltf.scene );
			this.scene.add( this.control );

      //
      gltf.scene.scale.set(3, 3, 3)
      this.orbit.update();

      this.renderer.render(this.scene, this.camera);
    }, undefined,

    error => {
      console.log(error);
    });
 
  };

  // UPDATE REACT STATE AND INPUT VALUE
  updateSetState = () => {
    if (this.gltf !== undefined) {
      this.setState((state) => {
        const gltf = this.gltf[this.valType.value]
        return state[this.valType.value] = {x:gltf.x, y:gltf.y, z:gltf.z,}
      });
    };
  }



  // GETING DATA FORM SELECT ELEMENT TO SET POSITION SCALE OR ROTATION IN TRANSFORMCONTROL
  posRotScale = () => {
      switch (this.valType.value) {

        case "position":
          this.control.setMode( "translate" );
          break;

        case "rotation":
          this.control.setMode( "rotate" );
          break;

        case "scale":
          this.control.setMode( "scale" );
          break;

        default:;

    }
  };

  // MODEL POSITION CHANGE VIA POSITION INPUT
  objPosition = (direction, axis) => {
    this.gltf[direction][axis] = this.state[direction][axis];
    this.renderer.render(this.scene, this.camera);
  };
  // MODEL ROTATION CHANGE VIA ROTATION INPUT
  objRotation = (direction, axis) => {
    this.gltf[direction][axis] = this.state[direction][axis];
    this.renderer.render(this.scene, this.camera);
  };
  // MODEL SCALE CHAGE VIA SCALE INPUT
  objScale = (direction, axis) => {
    this.gltf[direction][axis] = this.state[direction][axis];
    this.renderer.render(this.scene, this.camera);
  };
  animate = () =>{
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);

    this.cube.rotation.y += 0.005;
  }

toggle = e => this.setState({
  showMenuButton: this.state.showMenuButton
});


  render() {

    return (
            <div>
              <Header/>
                <div className="BoodyBox"  ref={mount => this.mount = mount}> </div>
                <div className="BodyBox2"> <NewCanvas/> </div>
              <Footer/>
              <HomeFooter/>
            </div>
            )
    
  }
}

export default App
