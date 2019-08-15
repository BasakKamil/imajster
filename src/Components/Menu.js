import React,{Component} from 'react';
import { Link }  from 'react-router-dom';
import ShopB from './Button/ShopB';
import HomeB from './Button/HomeButton';
import ContactB from './Button/ContactButton';
import ServiceB from './Button/ServicesButton';



class Menu extends Component{
render(){
  
    return(
      
                <div id="menuCont">
                     <nav className="KamilaMenu">
                         <li> <Link to="/"><HomeB/></Link></li>
                         <li> <Link to="/shop"><ShopB/></Link></li>
                         <li><Link to="/services"><ServiceB/></Link></li>
                         <li> <Link to="/contact"><ContactB/></Link></li>
                     </nav>
                
                 </div>  
    
        );
    }
}
export default Menu;