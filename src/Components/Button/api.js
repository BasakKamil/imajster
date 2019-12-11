import React,{Component} from 'react';


class Api extends Component{

    state  = {
        contacts: []
    };
    componentDidMount(){

 
          
           
             
              const proxy = 'http://cors-anywhere.herokuapp.com/';
              const api = `${proxy}https://api.darksky.net/forecast/a18f321825c2c6503931cf827ff61142/37.8267,-122.4233`;
              // const frank = `${proxy}http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json`;
              const dol = `${proxy}http://api.nbp.pl/api/exchangerates/rates/c/usd?format=json`;
              const kamilaserver = `${proxy}https://nodeback-js.herokuapp.com/`;
              const Euro = `${proxy}http://api.nbp.pl/api/exchangerates/rates/c/eur?format=json`;
 
                fetch(api)
                .then(response => response.json())
                //  .then(data => console.log(data))
                 .then(data=>{
      
                  this.temperature = data.currently.temperature;
                  console.log(this.temperature);
        
    
                 });
        
                fetch(Euro)
                .then(res=> res.json())
                .then(
                 arr=> {
                   console.dir(arr);
                 const kurs = arr.rates[0].ask;
                 document.querySelector('.Frank').innerHTML = kurs; 
                });
    
                fetch(dol)
                .then(res=> res.json())
                .then(
                arr=>{
                const course =  arr.rates[0].bid;
                document.querySelector('.Dolce').innerHTML = course; 
                });
               

                function getRepos(){
                  return fetch(kamilaserver)
                  .then((response)=>{
                      if(response.ok){
                        return response.json();
                      }
                      throw Error('Response not 200');
                  })
                  .catch(err => console.warn(err));
                
                }
                
                getRepos().then(arr=>console.dir("Nic nie znalazło!"));
               
               
             
            
       
        
        
    
    }


    render(){

        return(
                <div>
                   
                    <div className="Current"> 
                         <p className="d-inline p-2 "> Obecny stan Dolara to: </p>
                         <p className="d-inline p-2 Dolce">     </p>
                         <p className="d-inline p-2  ">  Obecny stan Euro to: </p>
                         <p className="d-inline p-2  Frank">     </p>
                    </div>
                    
                </div>
              )
            }
    }

    export default Api

