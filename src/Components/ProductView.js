import React,{Component} from 'react';

class ProductView extends Component{
render(){
return(
<div className="row">
<div className="NewP col">
    <b>{this.props.product.name}</b>
    <i>{this.props.product.category}</i>
    <p>{this.props.product.type}</p>
    <img src={this.props.product.image} alt={this.props.product.name}/>
    <p >{this.props.product.description}</p>
    <div className="Pp">{this.props.product.price}</div>
    <button className="btn btn-danger"onClick={(event)=>{this.props.addToOrder(this.props.product)}}>Add to Order</button>
</div>
</div>
)

}

}
export default ProductView