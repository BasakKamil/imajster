import React, { Component } from 'react';
import firebaseApp from '../fbase.js';
import anime from 'animejs';
import { Link }  from 'react-router-dom';


export class LoginPanel extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""   
        }

    }
    
    signup = (e) => {
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {           
        }).then((u)=>{console.log(u)})
        .catch((error)=>{console.log(error);
        });
    }

    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( () => {
            this.props.changeLoggedIn(true);
        })
        .catch(()=>{
            alert('Niestety coś wpisałes niepoprawnie :) Popraw!')
        })   
    }
    
    handleLoginChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
    
        })
    
    }
    anime = (a) => {
        
        this.width = window.innerWidth;
        //    Animowanie wjezdzajacego Nagłówka h2
            this.morphing = anime({
                targets: `${a}`,
                translateX:[
                    { value:  -this.width ,duration: 700,delay: 500 },
                    { value: window.innerWidth/2,duration: 800,delay: 500 },
                    { value: 0,duration: 400,delay: 500 }
                ],
                easing: 'easeInOutExpo',
                loop: false,
    });
    }

    componentDidMount(){
        this.anime('.KamilaForm');

    }
    

    render() {

        
     

        return (
            <div className="AdminMajster">      
            <form className="KamilaForm" onSubmit={this.authenticate}>
                <h2 className="KamilaNagl">Zaloguj się !</h2>
                        <input type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}></input>
                        <input type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                        <button type="submit" className="btn btn-danger KamilaButt">Log in</button> 
                        <p>lub <br/>Zarejstruj się !</p>
                        <Link data-router-view="Signup" to="/Signup" className="btn btn-success">Signup</Link>
                        {/* <button type="submit" className="btn btn-success KamilaButt" onClick={this.signup}>Signup</button>  */}
            </form> 
        </div>
        )
    }
}

export default LoginPanel
