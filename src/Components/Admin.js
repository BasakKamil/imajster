import React,{Component} from 'react';


class Admin extends Component{
    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){

        const adminCss={ padding : '1%', margin: '1%' ,width: '98%'}
        return(

           <div className="AdminMajster">
           
            <form onSubmit={this.authenticate}>
                <input style={adminCss}type="text" placeholder="email" id="email" name="email" className="form-control"
                   onChange={this.handleLoginChange} value={this.state.email}></input>
                <input style={adminCss}type="password" id="password" name="password" className="form-control"
                   onChange={this.handleLoginChange} placeholder="********" value={this.state.password}></input>
                   <button type="submit" className="btn btn-danger KamilaButt">Log in</button>
            </form>
           
           </div>
           
           
         
        );
    }
}
export default Admin;