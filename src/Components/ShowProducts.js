import React, { Component } from 'react';
import AdminProductView from './AdminProductView';

export class ShowProducts extends Component {
    render() {
        let list;
        if(this.props.products){
            list = this.props.products.map((product) => <AdminProductView product={product} removeFromInventory={this.props.removeFromInventory} />);
        }
        else{
            list = <div>Nie ma nic!</div>
        }


        return (

            <div>
                    {/* <h2>{this.props.product.name}</h2>
                    <span>{this.props.product.category}</span>
                    <span><AdminProductView product={product} removeFromInventory={} /></span> */}

                    {list}

            </div>
        )
    }
}

export default ShowProducts
