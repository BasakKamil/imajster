import React,{ Component } from 'react';
import ProductView from './ProductView.js';
import fbase from '../base';



class Inventory extends Component{
    constructor(){
        super();
        this.state = {
            // usunięte ze wzgledu na przypadek braku produktów na stanie - wyskakiwal bład
            // products: []
        };
        
    };
    
        
    componentDidMount(){
        this.ref = fbase.syncState('store/products',{
            context: this,
            state: 'products'
        });
    }
    
    componentWillUnmount(){
        fbase.removeBinding(this.ref);
    }


    render(){
        let productListing ;
// Spr czy nasz stan produktów jest tablica czyli czy jest cos na stanie, jezeli tak to:
    if(Array.isArray(this.state.products)){
        productListing =  this.state.products.map(product => {
            return <ProductView product={product} addToOrder={this.props.addToOrder}/>
        });
    }
    else{
        //  Jezeli nie to wyswietli nams ie to:
        productListing = <h4>Nie ma nic na Stanie! </h4>
    }    
    




    return(
        <div className="InvContainer">
           <div><h1>SKLEP</h1></div> 
           <div className="Inve">{ productListing }</div> 
        </div>
    )
}

}
export default Inventory