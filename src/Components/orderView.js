import React,{Component} from 'react';

class OrdertView extends Component{
render(){
return(
<div>
    <b>{this.props.product.name}</b>
  
    <button onClick={(event)=>{this.props.removeFromOrder(this.props.product.name)}}>Remove from Order</button>

</div>

)

}

}
export default OrdertView