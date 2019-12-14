import React, { Component } from 'react';
// import signIn from '../Components/actions/signin';
import anime from 'animejs';
import { Link }  from 'react-router-dom';
// import {connect} from 'react-redux';
import firebaseApp from '../fbase';


export class LoginPanel extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""   
        }

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

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.signIn(this.state);
    // }

   

    anime = (a) => {
        // const kamilaform = document.querySelector('.KamilaForm');
        // console.dir(kamilaform);

        this.width = window.innerWidth;
        //    Animowanie wjezdzajacego Nagłówka h2
            this.morphing = anime({
                targets: `${a}`,
                translateX:[
                    { value: window.innerWidth*1.1,duration: 1300,delay: 600 },
                    { value:  this.width ,duration: 500,delay: 500 }
        
                ],
                easing: 'easeInOutExpo',
                loop: false,
    });
    }

    componentDidMount(){
        this.anime('.KamilaForm');

    }
    

    render() {

        // const {authError} = this.props;  
     

        return (
            <div className="AdminMajster">      
            <form className="KamilaForm" onSubmit={this.authenticate}>
                <h2 className="KamilaNagl">Zaloguj się !</h2>
                        <input type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}></input>
                        <input type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                        <button type="submit" className="btn btn-danger KamilaButt">Log in</button> 
                        <p>lub <br/>Zarejstruj się !</p>
                        <Link data-router-view="Signup" to="/Signup" className="btn btn-success"> Signup</Link>
                        {/* <div>
                        {authError ? <p>{authError}</p> :  null}
                        </div> */}
                        {/* <button type="submit" className="btn btn-success KamilaButt" onClick={this.signup}>Signup</button>  */}
            </form> 
        </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return{
//         auth: state.firebase.auth,
//         authError: state.auth.authError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         signIn: (creds) => dispatch(signIn(creds))
//     }
// }

export default LoginPanel
