import React,{Component} from 'react';
import Spring from 'react-spring/renderprops';

class MenuButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
          title: 'iMajster'
    
        }
      }
render(){
return(
<Spring>
    {props=>(
            <div style={props}>
                <button className="MenuBasi" onClick={this.props.toggle}>


Menu

                  
                </button>
            </div>
    )} 
</Spring>
)

}


}
export default MenuButton;