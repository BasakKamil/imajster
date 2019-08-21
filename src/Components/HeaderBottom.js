import React,{Component} from 'react';
import { Link } from 'react-router-dom';


class HeaderBootom extends Component{

    
    
    render(){
        return(
        
            <div className="Uno">
                   <button type="button" class="btn btn-warning"><Link to="/admin">Admin Panel</Link></button>
                   <button onClick={this.props.toggle} class="btn btn-danger" >Menu!</button>
          
            </div>
         
         );
    }

}
export default HeaderBootom