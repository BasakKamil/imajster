import React,{Component} from 'react';
import Header from './Header';
import { Spring } from 'react-spring/renderprops';
// import * as ScrollMagic from "scrollmagic";
import { TimelineLite, TweenLite, Power2 } from 'gsap';
import {ScrollMagic} from 'scrollmagic';



class Shop extends Component{
    // constructor(props) {
    //     super(props);
    //     this.controller = new ScrollMagic.Controller();
    //     this.state = {
    //         pinText: 'Unpinned.'
    //     };
    // }
  
    // componentDidMount() {

    //     const controller = new ScrollMagic.Controller();
    //     new ScrollMagic.Scene({triggerElement: ".Products", duration: 1500, tiggerHook:0})
    //         .addIndicators() // add indicators (requires plugin)
    //         .addTo(controller);
        

    // }


render(){
  
    const flight = {
        curviness: 2, 
        autoRotate: true,
        values: [
            {x:-window.innerWidth,y:0},
            {x:0,y:0},
        
        ]
    }

    const tween2 = new TimelineLite();
    tween2.add(
        TweenLite.to('.Products',1,{
            bezier: flight,
            ease: Power2.easeInOut
        })
    );

       
    return(

        <div className="ShopiMajster container-fluid">
            <Header/>
            <div className="Counter">
            <Spring 
            from={{number: 10}}
            to={{number: 0}}
            config={{delay: 1000,duration: 10000}}>
                {props=>(
                    <div className = 'Germania' style={props}>
                        <h1 style={StyleCount}>
                        {props.number.toFixed()}
                        </h1>

                    </div>
                    
                )}
            </Spring>
            
            </div>
            <div className="Products row">
                        <h2>Produkty:</h2>
                        <div className="GridKamil col-6"> 1 Grid</div>
                        <div className="GridKamil col-6"> 2 Grid</div>
                        <div className="GridKamil col-6"> 2 Grid</div>
                        <div className="GridKamil col-6"> 2 Grid</div>
            </div>
         

        </div>

        );
    }
}
export default Shop;

const StyleCount = { background: 'none',color: 'white' };