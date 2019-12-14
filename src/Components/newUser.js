import React, { Component } from 'react';
import firebaseApp from '../fbase'; 
import {firestore} from 'redux-firestore';
import axios from 'axios';
// import { signUp } from './actions/signUp';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';




export class newUserReg extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            adress: '',
            city: '',
            country: '',
            phone: '',
            users: [],
            selectedFile: null
        }
    }
   
      collection = () =>{
        firebaseApp.syncState('store/Users',{
            context: this,
            state: 'users'
        });
    } 

    signup = (e) => {
       
        // e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((resp)=>{

            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname
                // initials: this.state.firstname[0] + this.state.lastname[0]
            })
        }).then(()=>{
            console.log('SIGNUP_SUCCES');       
         }).catch(err=> {
            console.log('SIGNUP_ERROR', err);
        })
        
    }



    handleLoginChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
    
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.signup(this.state);
        this.fileSelectedHandler();
     
    }


    fileSelectedHandler = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
        // Funckja z Firebase do ładowania fot
        axios.post('https://us-central1-imajsternowa.cloudfunctions.net/uploadFile',fd)
        .then(res => {
            console.log(res);
        });
    }

    render() {
        // const {auth,authError} = this.props;
        // if(auth.uid) return <Redirect to="/shop" />
        return (
            <div>
                <form className="KamilaForm" onSubmit={this.handleSubmit}>
                <h2 className="KamilaNagl">Zarejstruj się !</h2>
                        <input type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}></input>
                        <input type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                        <input type="text" placeholder="firstname" id="firstname" name="firstname" className="form-control" onChange={this.handleLoginChange} value={this.state.firstname}></input>
                        <input type="text" placeholder="lastname" id="lastname" name="lastname" className="form-control" onChange={this.handleLoginChange} value={this.state.lastname}></input>
                        <input type="text" id="adress" name="adress" className="form-control" onChange={this.handleLoginChange} placeholder="ul.Domaniecka 20A" value={this.state.adress}></input>
                        <input type="text" id="city" name="city" className="form-control" onChange={this.handleLoginChange} placeholder="Warszawa" value={this.state.city}></input>
                        <input type="file" onChange={this.fileSelectedHandler}/>
                        <button type="submit" className="btn btn-danger KamilaButt" >Signup</button> 
                         {/* {authError ? <p>{authError}</p> : null} */}
               
                
            </form> 


         
        
            </div>
        )
    }
}

// const auth = this.props.auth;


// const mapStateToProps = (state) => {
//     return{
//         auth: state.firebase.auth,
//         authError: state.auth.authError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (newUser) => dispatch(signUp(newUser))
//     }

// }

export default newUserReg
