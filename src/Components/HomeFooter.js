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
            <div className="d"><Clock/></div>
              <div className="d">
                <div><h4>Phone Number:</h4>
                796 895 079</div>
                <div><h4>E-Mail:</h4>
                Bastric91@gmail.com</div>

              
              </div>
              <div className="d"><Facebook fotoStaff1={Foto1} /></div>
              <div className="d"><Instagram fotoStaff2={Foto2}/></div>
            </div>
           
        </div>
    )
  }
}
export default HomeFooter