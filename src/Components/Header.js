import React,{Component} from 'react';
import { Spring } from 'react-spring/renderprops';
import HeaderBottom from './HeaderBottom.js';
import {Transition, animated} from 'react-spring/renderprops';
import Menu from './Menu';
// import styled from 'styled-components';

class Header extends Component {
 
    constructor(){
      super();
      this.state = {
      title: 'iMajster',
      showHeaderBottom: false
    }
  }
    toggle = e => this.setState({showHeaderBottom: !this.state.showHeaderBottom});

    componentDidMount(){
//Zmiana tla w Menu przy nacisnieciu Przycisku otwierajacego MENU 
      this.btn = document.querySelector('.btn');
      this.btn.addEventListener("click", function() {
          this.nas = document.querySelector('.KamilHeader');
          console.dir(this.nas);
        
          if (this.style.getPropertyValue("font-size") !== "1.5rem") {
              this.nas.classList.add('Zmianyyy');
              this.style.setProperty("background-color", "#ffc107");
              this.style.setProperty("font-size", "1.5rem");
              this.style.setProperty("border-radius", "3rem");
             
          } else {
              this.nas.classList.remove('Zmianyyy');
              this.style.setProperty("background-color", "");
              this.style.setProperty("font-size", "");
              this.style.setProperty("border-radius", "");
          }
      });
      

    }
  
    render(){
    
      return(
        
     
        <Spring 
        from={{opacity:0}}
        to={{opacity:1}}

        >
          {props=>(
            <div className="KamilHeader container-fluid" style={props}>
                   <button onClick={this.toggle} className="KamciaButton btn btn-primary" >
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                            <g>
                          <title>background</title>
                           <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                            </g>
                            <g>
                          <title>Layer 1</title>
                          <path id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"/>
                           </g>
                         </svg>
                        </button>
                <HeaderBottom />
                <Transition
                native
                items={this.state.showHeaderBottom}
                from={{opacity: 0,transform: 'scale(0)'}}
                enter={{opacity: 1,transform: 'scale(1)'}}
                leave={{opacity: 0}}
                cofing={{ duration: 0}} >
                {show => show && (props =>(
                <animated.div style={props} className="kamcia">
                <Menu />
                </animated.div>
                ))}
                </Transition>
            </div>
          )}
        </Spring>
         

      );
    }
  }

  export default Header
