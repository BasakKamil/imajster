import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
// rce + tab -> skrót do tworzenia podstawy w React

export class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
    
        }

    }


    // przejscie do nastepnego kroku
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });

    }
    // Cofnięcie sie do poprzeniego kroku
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });

    }

    handleChange2 = input => e => {
        this.setState({
            [input]: e.target.value
        });

    }


    render() {
        const {step} = this.state;
        const {firstName,lastName,email,phone} = this.state;
        const values = {firstName,lastName,email,phone};
     

        // eslint-disable-next-line default-case
        switch (step){
            case 1:
            return(
                <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange2}
                    values={values}
                    />  
            );
            case 2:
                return(
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange2}
                        previousStep={this.prevStep}
                        values={values}
                        />  
                );
            case 3: 
                return  <h2>Potwierdzenie</h2>
            case 4: 
                return  <h2>Gratulacje!</h2>

        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
