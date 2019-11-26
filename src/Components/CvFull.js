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
                    { value:  0 ,duration: 200,delay: 500 },
                    { value:  this.width ,duration: 200,delay: 200 },
                    { value: this.width/2,duration: 200,delay: 200 }
                ],
                easing: 'easeInOutExpo',
                loop: false,
    });
}  


animenext = (a,c) => {
this.basket = anime({
    targets:  `${a}`,
    translateX: [
        {value: window.innerWidth/2}, 
        {value: window.innerWidth/3}
     ],
    translateY: [
        {value: -100}
    ],
    scale: [2,4,6,4,2],
    rotate: '2turn',
    delay: `${c}`
  });
}
  componentDidMount(){
    this.animetwo('.WitamywCv');
    this.animenext('.Start',500); 
}
   
    render() {
        return (
            <div>
               <div className="WitamywCv">
                Witamy w Cv
            </div>
            <div className="Start">
            O mnie :

            </div>
            </div>
        )
    }
}

export default CvFull
