import React,{Component} from 'react';
import * as ScrollMagic from "scrollmagic";
import Header from './Header';
import { TimelineLite, TweenLite } from 'gsap';
// import Foto from '../Components/BOX/slub.jpg';
import Api from './Button/api';

class Contact extends Component{

    constructor(props) {
        super(props);
        this.tween = new TimelineLite();
        this.flightPath = {
            curviness: 1.25,
            autoRotate: true,
            values: [{x:100,y:-20},{x:300,y:10},{x:500,y:100}]
        };
        this.tween.add(
                    TweenLite.to(".paper",1,{
                        bezier: this.flightPath,
                        // ease: Power1.easeInOut
                    })
                );
        this.controller = new ScrollMagic.Controller();
        this.state = {
            title: 'Witaj kamil',
            class: '.Hudge'
        };
      
       
    
    }
  
    componentDidMount() {

       
        new ScrollMagic.Scene({
            triggerElement: "#CallMeBaby", 
            duration: 1500, 
            tiggerHook:1
        })
            // .setTween(this.tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.controller);
        

    }




    render(){
        


        // const Fociszka = ({
        //     width: '50%',
        //     backgroundColor: 'yellow' 

        // });

     

        return(
            <div>   
                <Header/>
                
                <div id="CallMeBaby">
                   <div className="KamilBCall">
                    <h1 className={this.state.class}>Call me! {this.state.title}</h1>
                             
                    <Api/>
                  
                    <p>Polerum lelum  olerum lelum  olerum lelum  olerum lelum olerum lelum olerum lelum olerum lelum volerum lelum </p>
                    
                 
                   {/* <img style={Fociszka} src={Foto} /> */}
                   <button className="But">Click</button>
                   </div>
                </div>
            </div>
    
            );
        }
    }
    export default Contact;
