import React,{Component} from 'react';


class Admin extends Component{

   
    constructor(props) {
        super(props);
        this.state = {
            email: "Bastric91@gmail.com"
        }
        this.items = [
            {name: 'Kamil', surname: 'Basak', old: 28},
            {name: 'Kuba', surname: 'Basak', old: 26},
            {name: 'Krzysztof', surname: 'Sech', old: 27},
            {name: 'Piotrek', surname: 'Mackiewicz', old: 28}

        ]

    
    }
    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    
    }
    componentDidMount(){
        // 1 Metoda: Filter w Tablicach w React
        this.fillteredItems = this.items.filter((item) => {
            return item.old <= 27
        })
        console.log(this.fillteredItems);

        // 2 metoda: Map w Tablicach w React
        this.mapItem = this.items.map((item) => {
            return item.surname

        })  
        console.log(this.mapItem);
        //3 Metoda: Find w Tablicach - w React
        this.foundItem = this.items.find((item) => {
            return item.name === 'Kamil' 
        })
        console.log(this.foundItem);
        //4 Metoda: forEach w Tablicach w React 
        this.items.forEach((item) => {
           console.log(item.name);
        })

        // 5 Metoda Some w Tablicach w React - true or false
        this.hasexpensiveItems = this.items.some((item) => {
        return item.old >= 27 
        })
        console.log(this.hasexpensiveItems);

        //6 Metoda: Reduce w Tablicach w React 
      
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