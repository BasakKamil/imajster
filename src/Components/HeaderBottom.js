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
                          
                

        
                <LogoiM/>


          
            </div>
         
         );
    }

}
export default HeaderBootom