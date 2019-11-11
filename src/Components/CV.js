import React,{Component} from 'react';
import LoginPanel from './LoginPanel';
import CvFull from './CvFull.js';

class CV extends Component{
    constructor(){
        super();
        this.state = {
            // Express Login- backend
            loggedIn : false 
        };
    }


    componentDidMount(){
   
        this.a = document.querySelector('.MyCv h2').textContent = "Witaj w CV Kamila Basaka";
  
        console.log(this.a);

    }
    
    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 
    render(){

    return(
    <div className="MyCv">         
        {!this.state.loggedIn && 
                <LoginPanel
                changeLoggedIn = {this.changeLoggedIn}
            />}
        {this.state.loggedIn &&
  
                <CvFull/>
            
        }



    </div>
    
            );
        }
    }





export default CV