import React, { Component } from 'react';
import firebaseApp from '../fbase.js';
import anime from 'animejs';
import fbase from '../base.js';
// import Anime from 'react-anime';

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
        },
        // Tablica gdzie będe trzymał produkty -przeniesiona do Shop
        products : [],
        loggedIn : false,
        email: "",
        password: ""
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
handleLoginChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value

    })

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
            image: ""
    
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

// Podpiecie Bazy Danych z obecnymi Stanami 
componentDidMount(){
    this.ref = fbase.syncState('store/products',{
        context: this,
        state: 'products'
    });

    //    Animowanie wjezdzajacego Nagłówka h2
    this.morphing = anime({
        targets: '.KamilaNagl',
        translateX:[{ value: window.innerWidth/3,duration: 4000,delay: 500 },
        {value: window.innerWidth/2,duration: 3000,delay: 500},
        { value: window.innerWidth/3,duration: 4000,delay: 500 }
        ],
        easing: 'easeInOutExpo',
        loop: false,
    });
}

componentWillUnmount(){
    fbase.removeBinding(this.ref);
}


authenticate = (event) => {
    event.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then( () => {
        this.setState({
            loggedIn: true
    })
    // .catch(()=>{
    //     this.setState({
    //         loggedIn: false
    //     })
    // })
    })
}

render(){



return(
<div className="Logowanie">
    {!this.state.loggedIn && 
    
<div className="AdminMajster">
                {/* <DelayedComponent>
                    <svg opacity="0.5" className="KamilaTlo" viewBox="0 0 1366 768" fill={background} >
                    <Anime
                        duration={duration}
                        loop={loop}
                        easing="easeOutQuad"
                        d={['M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L0,0v768h1366V0L844,363z', 'M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L221,569L0,0v768h1366V0L844,363z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M844,363L221,569L0,0v768h1366V0l-133,683L844,363z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M830,774L221,569L0,0v768h1366V0l-133,683L830,774z','M1365.3,0.8v766.5H0.8V0.8H1365.3 M830,774L16,754L0,0v768h1366V0l-14,755L830,774z']}
                    >
                    <rect className="st0" />
                    <path className="st1" d="M15,45 L15,45 L15,45" stroke={color} strokeWidth="5" />
                    </Anime>
                    </svg>
                
                    <AdminPanel/>
                </DelayedComponent>    */}
             
               <form className="KamilaForm" onSubmit={this.authenticate}>
               <h2 className="KamilaNagl">Zaloguj się jako Administrator!</h2>
                        <input type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}></input>
                        <input type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                        <button type="submit" className="btn btn-danger KamilaButt">Log in</button>
                    </form>  
        </div>

    
    }
    {this.state.loggedIn &&
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
}

</div>
)

}


}

export default AdminPanel