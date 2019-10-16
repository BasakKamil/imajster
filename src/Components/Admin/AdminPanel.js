import React, { Component } from 'react';

class AdminPanel extends Component{
constructor(){
    super();
    this.state = {
        product:{
            name : "",
            category : "",
            description: "",
            OnStock: true,
            image: ""

        }
        // Tablica gdzie będe trzymał produkty -przeniesiona do App
        // products : []
    };


}
handleCHange = (event) => {
    // let newValue = event.target.value;
    // console.log(newValue);
  

    let newproduct;
    if(event.target.name==="OnStock"){
    newproduct = {
        ...this.state.product,
        [event.target.name]: event.target.checked
    }; 
    } else {
        newproduct = {
            ...this.state.product,
            [event.target.name]: event.target.value
        };
    } 
    this.setState({
    product: newproduct
    });
}

addNewProduct= (event) => {
    //Załatwia ze strona nie bedzie sie przeładowywać po nacisnieciu Add 
    event.preventDefault();
    // Tworze kopie swojego stanu by moc ja akytualizowac
    let newProduct = {...this.state.product};
    //Funkcja podpieta pod komponent w APP - przkazywanie props 
    this.props.addProduct(newProduct);

    this.setState({
        product:{
            name : "",
            category : "",
            description: "",
            OnStock: true,
            image: ""
    
        }
    });


}

render(){

return(
<div className="AdminPanelAdd col-xs-2">
    <form onSubmit={this.addNewProduct}>
        <h1>Dodaj Produkt do Bazy Danych</h1>
    <div className="form-group">
        <input type="text" placeholder="name" id="name" name="name"  onChange={this.handleCHange} className="form-control" value={this.state.product.name}/>
    </div>
    <div className="form-group">
        <input type="text" placeholder="category" id="category" name="category" onChange={this.handleCHange} className="form-control" value={this.state.product.category}/>
    </div>
    <div className="form-group">
        <textarea placeholder="description" id="description" name="description" onChange={this.handleCHange} className="form-control" value={this.state.product.description}/>
    </div>
    <div className="form-group">
        <input type="checkbox" placeholder="OnStock" id="OnStock" name="OnStock" onChange={this.handleCHange} className="form-chceck-input" value={this.state.product.OnStock} />
        <label htmlFor="ProductOnStock" className="form-check-label">On Stock</label>
    </div>
    <div className="form-group">
        <input type="text" placeholder="image" id="image" name="image" onChange={this.handleCHange}  className="form-control" value={this.state.product.image} />
    </div>
    <button type="submit" className="btn btn-danger">Add</button>
    </form>



</div>

)

}


}

export default AdminPanel