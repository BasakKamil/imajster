import React,{ Component } from 'react';
import Box from './BOX/Box';
import Box1 from './BOX/Box1';
import Box2 from './BOX/Box2';
import Box3 from './BOX/BOX3';

class Footer extends Component{
    render(){
    return(

    <div className="FootBasi"><p>WYKONANE STRONY:</p>
   <Box/><Box1/><Box2/><Box3/>
    </div>
    );

    }
}
export default Footer;