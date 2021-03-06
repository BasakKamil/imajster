import React,{Component} from 'react';
import { Link }  from 'react-router-dom';
import ShopB from './Button/ShopB';
import HomeB from './Button/HomeButton';
import ContactB from './Button/ContactButton';
import ServiceB from './Button/ServicesButton';
// import Fade from './Fade';
// import Highway from '@dogstudio/highway';


class Menu extends Component{

constructor(){
    super();
    this.state = {

    }
    // this.H = new Highway.Core({
    //     home: Fade
    // });

}



render(){
    
// const H = new Highway.Core({
//     transitions:{
//       default: Fade
//     }
//    });
//    console.dir(H);
  
    return(
                <div id="menuCont">
                    <nav className="KamilaMenu">
                            <li> <Link data-router-view="home" to="/"><HomeB/></Link></li>
                            <li> <Link data-router-view="shop" to="/shop"><ShopB/></Link></li>
                            <li><Link to="/services"><ServiceB/></Link></li>
                            <li> <Link to="/contact"><ContactB/></Link></li>
                    </nav>
                </div>  
    
        );
    }
}
export default Menu;