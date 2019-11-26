import React, { Component } from 'react';
import UserForm from './User/UserForm.js';
import LoginPanel from './LoginPanel.js';
import AddBookForm from './AddBookForm.js';
import ShowProducts from './ShowProducts.js';
import fbase from '../base';
import { Link }  from 'react-router-dom';

class AdminPanel extends Component{
constructor(){
    super();
    this.state = {
        // Express Login- backend
        apiResponse : "",
        loggedIn : false ,
        products: [],
        editMode : false,

     
    };


}

  // Express - Tworze backend la React przez API
callAPI(){
    fetch("http://localhost:4000/testAPI")
        .then(res=> res.text())
        .then(res=> this.setState({apiResponse: res}))
        .catch(err => console.log( "Error, probably API serve is disconect..." ));
        
} 




// // Podpiecie Bazy Danych z obecnymi Stanami 
componentDidMount(){
    this.callAPI();
    this.ref = fbase.syncState('store/products',{
        context: this,
        state: 'products'
    });

}

changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

removeFromInventory = (title) => {
    this.setState({
        products: this.state.products.filter(product => title!==product.name)
    });
  
  }

editProduct = () =>{
   this.setState({editMode: true});

  }


render(){
    // const { background = 'yellow' } = this.props;


    // Zamiast  <ShowProducts product={this.state.product}/> moze byc: 
    // const productShow =  this.state.products.map(product => {
    //     return <ShowProducts product={product} />
    // });

return(
<div className="Logowanie">
    <div className="ReturnHome"> <button className="btn btn-danger NowyL" ><Link data-router-view="home" to="/">Powrót</Link></button></div>
    <div className="ReturnHome"> <button className="btn btn-danger NowyL" ><Link data-router-view="cv" to="/cv">CV</Link></button></div>
    <div className="NewLogin">
        <UserForm/>
    </div>

    {!this.state.loggedIn && 
        <LoginPanel
        changeLoggedIn = {this.changeLoggedIn}
        />
    }
    {this.state.loggedIn &&
        <div>
        <AddBookForm 
        changeLoggedIn = {this.changeLoggedIn}
        editMode = {this.state.editMode}
        />
            <div class="Stm">
                <h2>Stan magazynowy:</h2>
                <ShowProducts products={this.state.products} removeFromInventory = {this.removeFromInventory} editProduct={this.editProduct}/>
                {/* {productShow} */}
            </div>
        </div>
    }
    <div className="ApiBackExpress">{this.state.apiResponse}</div>
</div>
)

}


}

export default AdminPanel