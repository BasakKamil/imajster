/* eslint-disable no-undef */
import React, { Component } from "react";
// import React3 from "react-three-renderer";






class HomeButton extends Component {


  constructor(){
    super();
    this.state = {
      imgToDisplay: this.logopaths ,
      nameButton: 'Witamy w Domu!'
    }

  }
  
componentDidMount(){

this.logopaths = document.querySelectorAll('#HomeCanvas svg path').length;
console.log(this.logopaths);

}
render() {

    return (
      
        <div
          id="HomeCanvas"
          className="ButtonBasi"
          alt= {this.state.nameButton}
        >
      Home

      </div>
    );
  }
}
export default HomeButton;