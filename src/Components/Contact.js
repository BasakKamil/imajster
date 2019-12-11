import React,{Component} from 'react';
import * as ScrollMagic from "scrollmagic";
import Header from './Header';
import { TimelineLite, TweenLite } from 'gsap';
// import Foto from '../Components/BOX/slub.jpg';
import Api from './Button/api';
import Map from './Map';


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
                    TweenLite.to(".Paper",1,{
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
                             
                    <Api/>
                   </div>
                   <div className="Paper">
                    <div className="Check">
                            <h2>Jak się ze mną Skontaktować ?</h2>
                            <div>Tel. 796 895 079<br/>
                            E-Mail: Bastric91@gmail.com<br/>
                            </div>

                    </div>
                    <div><h2>Gdzie mnie Szukać ?</h2>
                    Wraszawa - Wawer - Radość
                    </div>
                    </div>
                    <div className="AllMap">
                    <Map/>
                    </div>
                </div>
            </div>
    
            );
        }
    }
    export default Contact;
