import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import LogoiM from './LogoiM.js';

class HeaderBootom extends Component{

    
    
    render(){
        return(
        
            <div className="Uno">
                   <button type="button" className="KamciaButton btn btn-warning"><Link to="/admin">Admin Panel</Link></button>
                   <button onClick={this.props.toggle} className="KamciaButton btn btn-danger" >Menu!</button>
        
                <LogoiM/>


          
            </div>
         
         );
    }

}
export default HeaderBootom