import React,{Component} from 'react';
import { TimelineLite, TweenLite, Power2 } from 'gsap';
// import * as ScrollMagic from 'scrollmagic'
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'


class newCanvas extends Component{
    constructor(){
        super();
        this.state = { name: 'iPhone' };
        this.tl = new TimelineLite({paused: true});  
        //  this.controller = new ScrollMagic.Controller(); 
        this.tween2 = new TimelineLite();
        this.flightPath2 = {
            curviness: 1.5,
            autoRotate: false,
            values: [
                {x:100, y: -20},
                {x:300, y:10},
                {x:500, y:100},
                {x:750, y:-100},
                {x:350,y:-50},
                {x:600, y:100},
                {x:800,y:0},
                {x:window.innerWidth/1.25, y: 10}
    
            ]
        }
        this.handleClick = this.tl.play();        
    }
componentDidMount(){

        // Animacja w GSAP
        this.tween2.add(
            TweenLite.to('.iPhoneFly',3,{
                bezier: this.flightPath2,
                ease: Power2.easeInOut 
    
            })
    
        )
}

    render(){


        return(
                   <div className="newCanvas">
                        <nav className="nav-closed">
                        <h3>What we can Repair for you ?</h3>
                        <ul className="nav-links">
                        <li className="nav-button btn-primary" onClick={this.handleClick}> <p>iPhone</p> <br/>
                        </li>
                        <li className="nav-button btn-danger">iMac</li>
                        <li className="nav-button btn-info">MacBook</li>
                        <li className="nav-button btn-success">PC<br/></li>
                        </ul>
                        </nav>   
                        <nav className="nav-open">
                        <img className="iPhoneFly" src="https://cdn4.iconfinder.com/data/icons/iphone-5s-5c/256/iPhone-5S-Gold.png" alt={this.state.name}></img>
                        </nav>
    
                             
                     {/* <div className="Nowy">
                       <Controller>
                          <Scene duration={500} offset={50} triggerElement=".trigger">
                               <Tween
                                    staggerFrom={{ y: 50, visibility: "hidden", opacity: 0 }}
                                    staggerTo={{ y: 0, visibility: "visible", opacity: 1 }}
                                    stagger={1}
                                >
                                 <div className="trigger">
                                 <img className="iPhoneFly" src="https://cdn4.iconfinder.com/data/icons/iphone-5s-5c/256/iPhone-5S-Gold.png" alt={this.state.name}></img>
                                     </div>
                                  <div className="div1" />
                                    <div className="div2" />
                                        <div className="div3" />
                                  </Tween>
                         </Scene>
                      </Controller> 
                      </div> */}
                   </div>
              )

    }          

}
export default newCanvas