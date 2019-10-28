import React, { Component } from 'react';
import MuiTP from 'material-ui/styles/MuiThemeProvider';
import AppBar from  'material-ui/AppBar';
import TextF from 'material-ui/TextField';

export class FormPersonalDetails extends Component {
    constructor(){
        super();
        this.state = {}

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values} = this.props;
        return (
            <div className="Step2">
            <MuiTP>
                <React.Fragment>
                    <AppBar> <h2 className="KamilaNagl">Zarejstruj się jako Uzytkownik!</h2></AppBar>
                    <TextF
                    hintText="Podaj Swoje Imię"
                    floatingLabelText="First name"
                    onChange={this.props.handleChange2}
                    defaultValue={values.firstName}
                    />
                
                </React.Fragment>
            </MuiTP>
            </div>
        )
    }
}

export default FormPersonalDetails
