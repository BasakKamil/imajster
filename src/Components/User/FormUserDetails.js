import React, { Component } from 'react';
import MuiTP from 'material-ui/styles/MuiThemeProvider';
import AppBar from  'material-ui/AppBar';
import TextF from 'material-ui/TextField';
// import RaisedB from 'materia-ui/RaisedButton';

export class FormUserDetails extends Component {
    constructor(){
        super();
        this.state = {}

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    
    render() {
        const {values,anime} = this.props;
        console.log(anime);
        return (
            <div className="Step1">
            <MuiTP>
                <React.Fragment>
                    <AppBar> <h2 className="KamilaNagl">Zarejstruj się jako Uzytkownik!</h2></AppBar>
                    <TextF
                    hintText="Podaj Swoje Imię"
                    floatingLabelText="First name"
                    onChange={this.props.handleChange2}
                    defaultValue={values.firstName}
                    />
                    <TextF
                    hintText="Podaj Swoje Nazwisko"
                    floatingLabelText="Last name"
                    onChange={this.props.handleChange2}
                    defaultValue={values.lastName}
                    />
                    <TextF
                    hintText="Podaj Swój E-Mail"
                    floatingLabelText="email"
                    onChange={this.props.handleChange2}
                    defaultValue={values.email}
                    />
                    <TextF
                    hintText="Podaj do siebie Telefon"
                    floatingLabelText="phone"
                    onChange={this.props.handleChange2}
                    defaultValue={values.phone}
                    />
                </React.Fragment>
            </MuiTP>
            </div>
        )
    }
}

export default FormUserDetails
