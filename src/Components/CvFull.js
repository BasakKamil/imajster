import React, { Component } from 'react'
import anime from 'animejs';


export class CvFull extends Component {
   
    animetwo = (b) => {
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        //    Animowanie wjezdzajacego Nagłówka h2
            this.morphing = anime({
                targets: `${b}`,
                translateX:[
                    { value:  0 ,duration: 700,delay: 500 },
                    { value:  this.width ,duration: 800,delay: 500 },
                    { value: this.width/2,duration: 400,delay: 500 }
                ],
                easing: 'easeInOutExpo',
                loop: false,
    });
}  
  componentDidMount(){
    this.animetwo('.WitamywCv');

}
   
    render() {
        return (
               <div className="WitamywCv">
                Witamy w Cv
            </div>
        )
    }
}

export default CvFull
