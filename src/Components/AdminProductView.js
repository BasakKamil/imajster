import React, { Component } from 'react';
import {connect} from 'react-redux';

export class ProductView extends Component {
    render() {
        return (
            <div className="AdminPV row">
                <div className="col-xs-4"><b>{this.props.product.name}</b></div>
                <div className="col-xs-4"><button onClick={(event)=> this.props.editProduct(this.props.product)} className="btn-primary NoweKam">Edit</button></div>
                <div className="col-xs-4"><button onClick={(event)=>{this.props.removeFromInventory(this.props.product.name)}} className="btn-primary NoweKam">Remove</button></div>
            </div>
        )
    
        }
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{
        editProduct: (product) => dispatch({
            type: "SEND_PRODUCT_TO_EDIT",
            playload: product
        })
    }
}


const AdminProductView = connect(mapStateToProps,mapDispatchToProps)(ProductView);

export default AdminProductView 
