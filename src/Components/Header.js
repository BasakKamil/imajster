import React,{Component} from 'react';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'iMajster'

    }
  }
    render(){
      return(
      <div className="KamilHeader">
       <h1 className="Uno">{this.state.title}</h1>
       <h2 className="Uno">Kamil Basak</h2>
       <HeaderBottom />
      </div>
      );
    }
  }

  export default Header