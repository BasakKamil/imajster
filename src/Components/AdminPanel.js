import React, { Component } from 'react';
import UserForm from './User/UserForm.js';
import LoginPanel from './LoginPanel.js';
import AddBookForm from './AddBookForm.js';


class AdminPanel extends Component{
constructor(){
    super();
    this.state = {
        // Express Login- backend
        apiResponse : "",
        loggedIn : false  
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

}

changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

render(){
    // const { background = 'yellow' } = this.props;



return(
<div className="Logowanie">
    <div className="NewLogin">
        <UserForm/>
    </div>

    {!this.state.loggedIn && 
        <LoginPanel
        changeLoggedIn = {this.changeLoggedIn}
        />
    }
    {this.state.loggedIn &&
        <AddBookForm 
        changeLoggedIn = {this.changeLoggedIn}
        />
}



    <div className="ApiBackExpress">{this.state.apiResponse}</div>
</div>
)

}


}

export default AdminPanel