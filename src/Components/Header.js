import React,{Component} from 'react';
import { Spring } from 'react-spring/renderprops';
import HeaderBottom from './HeaderBottom.js';
import {Transition, animated} from 'react-spring/renderprops';
import Menu from './Menu';

class Header extends Component {
 
    
   state = {
      title: 'iMajster',
      showHeaderBottom: false
    }
    toggle = e => this.setState({showHeaderBottom: !this.state.showHeaderBottom});
  
  
    render(){
      return(
        
     
        <Spring 
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay: 1000, duration: 1000}}
        >
          {props=>(
            <div className="KamilHeader container-fluid" style={props}>
                  
               <HeaderBottom toggle={this.toggle}/>
               <Transition
               native
               items={this.state.showHeaderBottom}
               from={{opacity: 0,transform: 'scale(0)'}}
               enter={{opacity: 1,transform: 'scale(1)'}}
               leave={{opacity: 0.1}}
               cofing={{ duration: 1000}}
               >
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
