import React,{Component} from 'react';

class OrdertView extends Component{
render(){
return(
<div className="d-block p-2">
    <p className="nameO"><b> {this.props.product.name} </b></p>
    <div className="CenaO"><b> {this.props.product.price} </b></div>
    <button className="btn-danger" onClick={(event)=>{this.props.removeFromOrder(this.props.product.name)}}> Remove from Order</button>

</div>

)

}

}
export default OrdertView