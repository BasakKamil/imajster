import React, { Component } from 'react';
// import { Spring } from 'react-spring/renderprops';
// import {Transition, animated} from 'react-spring/renderprops';
import Order from '../order';


export class Basket extends Component {
    constructor(){
        super();
        this.state = {
        order: []
      }
    }
    
    toggledue = e => this.setState({showbasketFull: !this.state.showBasketFull});
    render() {

       
        return ( 
            
            <div className="open" >
         
                    Ok
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
            </div>
        )
}
}
export default Basket
