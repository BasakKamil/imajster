import React, { Component } from 'react';
// import { Spring } from 'react-spring/renderprops';
// import {Transition, animated} from 'react-spring/renderprops';

export class Basket extends Component {
    constructor(){
        super();
        this.state = {
        showBasketFull: false
      }
    }
    
    toggledue = e => this.setState({showbasketFull: !this.state.showBasketFull});
    render() {

       
        return ( 
            
            <div className="open" >
               Mój Koszyczek

            </div>
        )
}
}
export default Basket
