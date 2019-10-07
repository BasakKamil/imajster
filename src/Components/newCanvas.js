import React,{Component} from 'react';
import { TimelineLite, TweenLite, Power2 } from 'gsap';
// import { ScrollMagic } from 'scrollmagic';



class newCanvas extends Component{
    constructor(){
        super();
        this.state = { name: 'iPhone' };
        //  this.handleClick = this.tl.play();
        //  this.controller = new ScrollMagic.Controller();
        //  this.scene= new ScrollMagic.Scene({triggerElement: '.newCanvas', duration: 3000}).addIndicators().addTo(this.controller);
         this.tl = new TimelineLite({paused: true});   
         this.tween2 = new TimelineLite();
         this.flightPath2 = {
            curviness: 1.5,
            autoRotate: true,
            values: [
                {x:100, y: -20},
                {x:300, y:10},
                {x:500, y:100},
                {x:750, y:-100},
                {x:350,y:-50},
                {x:600, y:100},
                {x:800,y:0},
                {x:window.innerWidth, y: 100}
    
            ]
        }
        
    }
componentDidMount(){
 // const navButton = document.querySelector('.nav-button');
        // const navOpen = document.querySelector('.nav-open');
        // this.tl.to('.cover',1,{
        //     width: '60%',
        //     ease: Power2.easeOut
        //  })
        //  .to('nav',1,{
        //      height: '100%',
        //      ease: Power2.easeOut
        //  });
        // this.tl.addEventListener('click', this.handleClick);
    
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
                         <li className="nav-button btn-primary" onClick={this.handleClick}>iPhone</li>
                         <li className="nav-button btn-danger">iMac</li>
                         <li className="nav-button btn-info">MacBook</li>
                         <li className="nav-button btn-success">PC</li>
                        </ul>
                    </nav>   
                    <nav className="nav-open">
                        <img className="iPhoneFly" src="https://cdn4.iconfinder.com/data/icons/iphone-5s-5c/256/iPhone-5S-Gold.png" alt={this.state.name}></img>
                        <div className="iPhones">
                            Look iPhones
                            {/* <img className = "cover" src="https://i4.skapiec.pl/1/nOgktkraW1hZ2VzL2IxMmZkYzk1MThmMmM1MTExMjdmYzJlOTNkYzY1MDIzLmpwZ5OVAs0CvADCw5UCAM0CvMLDkwmmOWU2OWYwBg/apple-iphone-7-128gb-czerwony-mprl2pm-a.jpg" alt={this.state.name}></img> */}
                        </div>
                    </nav>
                     <div className="showing col-md-4"> 
                            Krótkim opis co robimy...
                     </div>        
                   </div>
              )

    }          

}
export default newCanvas