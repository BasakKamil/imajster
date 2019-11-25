import React, { Component } from 'react'
import fbase from '../base.js';
import firebaseApp from '../fbase.js';
export class AddBookForm extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state = {
            // Tablica gdzie będe trzymał produkty -przeniesiona do Shop
            products : [],
            product:{
                name : "",
                category : "",
                description: "",
                OnStock: true,
                image: "",
                type: "",
                price: ""
            }
        };
    }

    // Podpiecie Bazy Danych z obecnymi Stanami 
    componentDidMount(){

    this.ref = fbase.syncState('store/products',{
        context: this,
        state: 'products'
    });

    }

    componentWillUnmount(){
    fbase.removeBinding(this.ref);
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

 
    addNewProduct = (event) => {
        //Załatwia ze strona nie bedzie sie przeładowywać po nacisnieciu Add 
        event.preventDefault();
        // Tworze kopie swojego stanu by moc ja akytualizowac
        let newProduct = {...this.state.product};
        //Funkcja podpieta pod komponent w APP - przkazywanie props 
        // this.props.addProduct(newProduct);
    

        this.setState({
            products: [...this.state.products, newProduct],
            product:{
                name : "",
                category : "",
                description: "",
                OnStock: true,
                image: "",
                type: "",
                price: ""
        
            }
        });
    
        if(Array.isArray(this.state.products)){
            this.setState({
                    products: [...this.state.products, newProduct] 
            });
            } else{
                this.setState({products: [newProduct]}); 
            }
        
    }
    logout = (event) => {
        event.preventDefault();
        firebaseApp.auth().signOut()
        .then(() => {
            this.props.changeLoggedIn(false)
        }).catch((error)=>{
            console.log('Error LogOut!')
        })
        
    }

    render() {
        const label = this.props.editMode?"Edit":"Add";
        

        return (
            <div className="AdminPanelAdd col-xs-2">
            <button type="submit" className="btn btn-danger KamilaButt" onClick={this.logout}>Log Out</button>    
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
            <div className="form-group">
                <select type="select" placeholder="type" id="type" name="type" onChange={this.handleCHange}  className="form-control" value={this.state.product.type} >
                    <option value="iphone5">iPhone 5</option>
                    <option value="iphone6">iPhone 6</option>
                    <option value="iphone7">iPhone 7</option>
                    <option value="iphone8">iPhone 8</option>
                    <option value="iphoneX">iPhone X</option>
                    <option value="iphoneSX">iPhone XS</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" placeholder="price" id="price" name="price" onChange={this.handleCHange}  className="form-control" value={this.state.product.price} />
            </div>
                <button type="submit" className="btn btn-danger">{label}</button>
            </form>
            </div>
        )
    }
}

export default AddBookForm
