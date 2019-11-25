import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import LogoiM from './LogoiM.js';
import 'bootstrap/dist/css/bootstrap.min.css';




class HeaderBootom extends Component{

    constructor(){
        super();
        this.state = {
        
        }
    }
  
    render(){
        return(
        
            <div className="Uno" >
                   <button type="button" className="KamciaButton btn btn-warning"><Link to="/admin">
                     Login / Register </Link>
                       </button>
                            <button onClick={this.props.toggle} className="KamciaButton btn btn-primary" >
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
                

        
                <LogoiM/>


          
            </div>
         
         );
    }

}
export default HeaderBootom