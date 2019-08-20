import React,{Component} from 'react';
import HeaderBottom from './HeaderBottom';
import { Spring } from 'react-spring/renderprops';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'iMajster'

    }
  }
    render(){
      return(
        
     
        <Spring 
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay: 1000, duration: 1000}}
        >
          {props=>(
            <div className="KamilHeader" style={props}>
                  {this.state.title}
                  <HeaderBottom/>
            </div>
          )}
        </Spring>
         

      );
    }
  }

  export default Header