import React,{ Component } from 'react';
import Facebook from './Facebook.js';
import Instagram from './Instagram.js';
import Clock from './Clock.js';
import Foto1 from './images/face.png';
import Foto2 from './images/insta.png';


class HomeFooter extends Component{

constructor(){
super();
this.state = {
}
}



  render(){
    
    return (
        <div className="HomeFooter">
            <div className="FootCont">
              <div>
                <p><h4>Phone Number:</h4>
                796 895 079</p>
                <p><h4>E-Mail:</h4>
                Bastric91@gmail.com</p>
                <p><h4>My website:</h4>
                www.imajster.com</p>

              
              </div>
              <p><Facebook fotoStaff1={Foto1} /></p>
              <p><Instagram fotoStaff2={Foto2}/></p>
            </div>
            <Clock/>
        </div>
    )
  }
}
export default HomeFooter