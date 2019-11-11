import React,{Component} from 'react';


class Api extends Component{

    state  = {
        contacts: []
    };
    componentDidMount(){

        // fetch(api)
        // .then(response => response.json())
        // .then(json => this.setState({ contacts: json.results }));
        // }
       
          
           
              // Check if the XMLHttpRequest object has a "withCredentials" property.
              // "withCredentials" only exists on XMLHttpRequest2 objects.
              const proxy = 'http://cors-anywhere.herokuapp.com/';
              const api = `${proxy}https://api.darksky.net/forecast/a18f321825c2c6503931cf827ff61142/37.8267,-122.4233`;
              let fr = 'a/chf';
              const frank = `${proxy}http://api.nbp.pl/api/exchangerates/rates/${fr}/?format=json`;
              const dol = `${proxy}http://api.nbp.pl/api/exchangerates/rates/c/usd?format=json`;
              let xhr = new XMLHttpRequest();
              xhr.onload = function() {
                var responseText = xhr.responseText;
                console.log(responseText);
                fetch(api)
                .then(response => response.json())
                //  .then(data => console.log(data))
                 .then(data=>{
      
                  const temperature = data.currently.temperature;
                  console.log(temperature);
                  document.querySelector('.Tempka').innerHTML = temperature;;  
    
                 });
        
                fetch(frank)
                .then(res=> res.json())
                .then(
                 arr=> {
                 const kurs = arr.rates[0].mid;
                 document.querySelector('.Frank').innerHTML = kurs; 
                });
    
                fetch(dol)
                .then(res=> res.json())
                .then(
                arr=>{
                const course =  arr.rates[0].bid;
                document.querySelector('.Dolce').innerHTML = course; 
                });
                
               };
              
               xhr.onerror = function() {
                 console.log('There was an error!');
               };
               
             
            
       
        
        
    
    }


    render(){

        return(
                <div>
                    <div contacts={this.state.contacts}></div>
                    <p className= "col6  col-md-4 Tempka"></p>
                    <div> 
                         <p className="col6 col-md-4"> Obecny stan Dolara to: </p>
                         <p className="col6  col-md-4 Dolce">     </p>
                         <p className="col6  col-md-4">  Obecny stan Franka to: </p>
                         <p className="col6  col-md-4 Frank">     </p>
                    </div>
                    
                </div>
              )
            }
    }

    export default Api

