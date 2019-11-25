import React,{Component} from 'react';

class OrdertView extends Component{
render(){
return(
<div className="d-block p-2">
    <b>{this.props.product.name}</b>
  
    <button className="btn-danger" onClick={(event)=>{this.props.removeFromOrder(this.props.product.name)}}> Remove from Order</button>

</div>

)

}

}
export default OrdertView