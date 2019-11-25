import React,{ Component } from 'react';
import OrderView from './orderView'; 


class Order extends Component{

render(){
    
    const orderedProducts = this.props.order.map(order => {
        return <OrderView product={order}  removeFromOrder={this.props.removeFromOrder} />
    })


    return(
        <div className="Order">
            {orderedProducts}
        </div>
    )
}

}
export default Order