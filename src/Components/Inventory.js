import React,{ Component } from 'react';
// import ProductView from './ProductView.js';
// import {fbase} from '../fbase';


class Inventory extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         products: []
    //     };
    // };
    
        
    // componentDidMount(){
    //     this.ref = fbase.syncState('store/products',{
    //         context: this,
    //         state: 'products'
    //     });
    // }
    
    // componentWillUnmount(){
    //     fbase.removeBinding(this.ref);
    // }


    render(){


    // const productListing =  this.state.products.map(product => {
    //     return <ProductView product={product} addToOrder={this.props.addToOrder}/>
    // });



    return(
        <div className="Inve">
            <h1>SKLEP</h1>
            {/* { productListing } */}
        </div>
    )
}

}
export default Inventory