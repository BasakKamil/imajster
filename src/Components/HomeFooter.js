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
                <div><h4>Phone Number:</h4>
                796 895 079</div>
                <div><h4>E-Mail:</h4>
                Bastric91@gmail.com</div>
                <div><h4>My website:</h4>
                www.imajster.com</div>

              
              </div>
              <div><Facebook fotoStaff1={Foto1} /></div>
              <div><Instagram fotoStaff2={Foto2}/></div>
            </div>
            <Clock/>
        </div>
    )
  }
}
export default HomeFooter