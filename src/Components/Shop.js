import React,{Component} from 'react';
import Header from './Header';
import { Spring } from 'react-spring/renderprops'

class Shop extends Component{
render(){
    return(

        <div className="ShopiMajster">
            <Header/>
            <div className="Counter">
            <Spring 
            from={{number: 10}}
            to={{number: 0}}
            config={{delay: 1000,duration: 10000}}>
                {props=>(
                    <div className = 'Germania' style={props}>
                        <h1 style={StyleCount}>
                        {props.number.toFixed()}
                        </h1>

                    </div>
                )}
            </Spring>
            </div>
        </div>

        );
    }
}
export default Shop;

const StyleCount = { background: 'none',color: 'white' };