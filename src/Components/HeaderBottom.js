import React,{Component} from 'react';
import { Link } from 'react-router-dom';


class HeaderBootom extends Component{
    render(){
        return(
        
            <div className="Uno">
                   <button type="button" class="btn btn-warning"><Link to="/admin">Admin Panel</Link></button>
           
            </div>
         
         );
    }

}
export default HeaderBootom