import React,{Component} from 'react';

class ProductView extends Component{
render(){
return(
<div>
    <b>{this.props.product.name}</b>
    <i>{this.props.product.category}</i>
    <img src={this.props.product.image} alt={this.props.product.name}/>
    <button onClick={(event)=>{this.props.addToOrder(this.props.product)}}>Add to Order</button>

</div>

)

}

}
export default ProductView