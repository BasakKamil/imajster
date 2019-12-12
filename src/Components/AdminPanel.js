import React, { Component } from 'react';
import UserForm from './User/UserForm.js';
import LoginPanel from './LoginPanel.js';
import AddBookForm from './AddBookForm.js';
import ShowProducts from './ShowProducts.js';
import fbase from '../base';
import { Link }  from 'react-router-dom';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import smoke from './BOX/smoke1.png';


class AdminPanel extends Component{
constructor(){
    super();
    this.state = {
        // Express Login- backend
        apiResponse : "",
        loggedIn : false ,
        products: [],
        editMode : false
    };
    this.cloudParticles = [];


}

  // Express - Tworze backend dla React przez API
callAPI(){
    const proxy = 'http://cors-anywhere.herokuapp.com/';
    const kamilaserver = `${proxy}https://nodeback-js.herokuapp.com/`;
    fetch(kamilaserver)
        .then(res=> res.text())
        .then(res=> this.setState({apiResponse: res}))
        .catch(err => console.log( "Error, probably API serve is disconect..." ));
        
} 


kamil = (texture) => {
    this.cloudGeo = new THREE.PlaneBufferGeometry(400,400);
    this.cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true
    });
    for(let p=0; p<50; p++){
        this.cloud = new THREE.Mesh(this.cloudGeo, this.cloudMaterial);
        this.cloud.position.set(
            Math.random()*800 - 400,
            500,
            Math.random() *500 - 500
        ); 
        this.cloud.rotation.x = 1.16;
        this.cloud.rotation.y = -0.12;
        this.cloud.rotation.z = Math.random()*2*Math.PI;
        this.cloud.material.opacity = 0.45;
        this.cloudParticles.push(this.cloud);
        this.scene.add(this.cloud); 
    }

    
}
superSztorm = () =>{
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60,this.width / this.height,1,1000 );
    
    this.camera.position.z = 1;
    this.camera.rotation.x = 1.16;
    this.camera.rotation.y = -0.12;
    this.camera.position.z = 0.27;
    // DODAJE ŚWIATŁA
    this.ambient = new THREE.AmbientLight(0x555555);
    this.directionalLight = new THREE.DirectionalLight(0xffeedd);
    this.directionalLight.position.set(0,0,1);
    this.flash = new THREE.PointLight(0x062d89, 30, 500 , 1.7);
    this.flash.position.set(200.300,100);
    this.scene.add(this.flash);
    this.scene.add(this.directionalLight);
    this.scene.add(this.ambient);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(this.width,this.height);
    this.scene.fog = new THREE.FogExp2(0x2d3740,0.001);
    this.renderer.setClearColor(this.scene.fog.color);
    this.mount.appendChild(this.renderer.domElement);

    // Utworze sobie geometrie do schowania gwiazd
    // this.starGeo = new THREE.Geometry();
    // for(let i=0;i<6000; i++){
    //     this.star = new THREE.Vector3(
    //         Math.random() * 600 - 300,
    //         Math.random() * 600 - 300,
    //         Math.random() * 600 - 300
    //     );
    //     this.starGeo.vertices.push(this.star);
    // }
    // this.sprite = new THREE.TextureLoader().load(Gwiazdka);
    // this.starMaterial = new THREE.PointsMaterial({
    //     color: 0xaaaaaa,
    //     size: 0.7,
    //     map: this.sprite
    // });
    // this.stars = new THREE.Mesh(this.starGeo, this.starMaterial);
    // this.scene.add(this.stars);
    this.loader = new THREE.TextureLoader().load(smoke);
    this.kamil(this.loader);
    this.animate();


}

// // Podpiecie Bazy Danych z obecnymi Stanami 
componentDidMount(){
    this.callAPI();
    this.ref = fbase.syncState('store/products',{
        context: this,
        state: 'products'
    });
   this.superSztorm();

}
animate = () =>{
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    this.cloudParticles.forEach(p=>{
        p.rotation.z -=0.01; 
    });
    if(Math.random() > 0.93 || this.flash.power > 100){
        if(this.flash.power < 100)
            this.flash.position.set(
                Math.random()*400,
                300 + Math.random() * 200,
                100 
            );
            this.flash.power = 50 + Math.random() * 500;

        
    }
  }
changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

removeFromInventory = (title) => {
    this.setState({
        products: this.state.products.filter(product => title!==product.name)
    });
  
  }

editProduct = () =>{
   this.setState({editMode: true});

  }
  


render(){
    // const { background = 'yellow' } = this.props;


    // Zamiast  <ShowProducts product={this.state.product}/> moze byc: 
    // const productShow =  this.state.products.map(product => {
    //     return <ShowProducts product={product} />
    // });

return(
    <React.Fragment>
    <div className="Logowanie">
    <div className="ReturnHome"> <button className="btn btn-danger NowyL" ><Link data-router-view="home" to="/">Powrót</Link></button></div>
    <div className="ReturnHome"> <button className="btn btn-danger NowyL" ><Link data-router-view="cv" to="/cv">CV</Link></button></div>
    <div className="NewLogin">
        <UserForm/>
    </div>

    {!this.state.loggedIn && 
        <LoginPanel
        changeLoggedIn = {this.changeLoggedIn}
        />
    }
    {this.state.loggedIn &&
        <div>
        <AddBookForm 
        changeLoggedIn = {this.changeLoggedIn}
        editMode = {this.state.editMode}
        />
            <div class="Stm">
                <h2>Stan magazynowy:</h2>
                <ShowProducts products={this.state.products} removeFromInventory = {this.removeFromInventory} />
                {/* {productShow} */}
            </div>
        </div>
    }
    {/* <div className="ApiBackExpress">{this.state.apiResponse}</div> */}
</div>
<div className="ThreeBack" ref={mount => this.mount = mount}>
</div>

</React.Fragment>
)

}


}

export default AdminPanel