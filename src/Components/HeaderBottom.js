import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import LogoiM from './LogoiM.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './Button/Basket.js';


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
                    <button className="Koszyk" onClick={this.toggle2}>
            
<svg  viewBox="0 0 64 64" >

<path className="sto" d="M13,38h40c0.9,0,1.7-0.6,1.9-1.5l6-22c0.3-1.1-0.3-2.2-1.4-2.5C59.4,12,59.2,12,59,12H12.8L12,7.7
	c-0.2-1-1-1.7-2-1.7H5C3.9,6,3,6.9,3,8s0.9,2,2,2h3.3l4.3,24c-3.9,0.1-6.9,3.3-6.8,7.2c0.1,3.9,3.3,6.9,7.2,6.8h1.7
	c-1.7,3.5-0.2,7.7,3.3,9.3s7.7,0.2,9.3-3.3c0.9-1.9,0.9-4.1,0-6h10.4c-1.7,3.5-0.2,7.7,3.3,9.3c3.5,1.7,7.7,0.2,9.3-3.3
	c0.9-1.9,0.9-4.1,0-6H56c1.1,0,2-0.9,2-2s-0.9-2-2-2H13c-1.7,0-3-1.3-3-3S11.3,38,13,38z M56.4,16l-4.9,18H16.7l-3.2-18H56.4z
	 M24,51c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S24,49.3,24,51z M47,51c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S47,49.3,47,51z"/>
</svg>
<Basket />
                    </button>

        
                <LogoiM/>


          
            </div>
         
         );
    }

}
export default HeaderBootom