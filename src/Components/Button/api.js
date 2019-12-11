import React,{Component} from 'react';
import Temp from '../BOX/temp.png';
import Skycons from 'react-skycons';

class Api extends Component{


  constructor(){
    super();
    this.state  = {
      contacts: [],
      icon:"",
      skycons: new Skycons({color: "white"})
    };
  

  }
    componentDidMount(){

 
              
              const lat = 52.185970;
              const long = 21.184840;
             
              const proxy = 'http://cors-anywhere.herokuapp.com/';
              const api = `${proxy}https://api.darksky.net/forecast/a18f321825c2c6503931cf827ff61142/${lat},${long}`;
              const dol = `${proxy}http://api.nbp.pl/api/exchangerates/rates/c/usd?format=json`;
              const kamilaserver = `${proxy}https://nodeback-js.herokuapp.com/`;
              const Euro = `${proxy}http://api.nbp.pl/api/exchangerates/rates/c/eur?format=json`;
 
                fetch(api)
                .then(response => response.json())
                //  .then(data => console.log(data))
                 .then(data=>{
                  
                  this.place = data.timezone;
                  this.temperature = data.currently.temperature;
                  this.new = ((this.temperature - 32) * 5/9);
                  // Zaokragle sobie temp do całości
                  this.real = Math.round(this.new);
                  const warsow = `<p> Obecnie w ${this.place} mamy:</p><h1> ${this.real}<img className="imgC" style="width:30px; margin-left:20px" src=${Temp} /></h1>`;
                  document.querySelector('.Tempka').innerHTML = warsow;
                  this.icon = data.currently.icon;
                  this.currentIcon =  this.icon.replace(/-/g,"_").toUpperCase();
                  // ustawiam na stanie icone odpowiednia do pogody obecnej w Wawie 
                  this.setState({
                    icon: this.currentIcon
                  })
                  console.log(this.currentIcon);
                 });
        
                fetch(Euro)
                .then(res=> res.json())
                .then(
                 arr=> {
                  //  console.dir(arr);
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



                // Połaczenie sie zmoim sererem backendowym 
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
                    <div> 
                   
                        <p className="Tempka"></p>
                        <Skycons 
                          color='white' 
                          icon={this.state.icon} 
                          autoplay={false}
                          className="Emota"
                        /> 


                    </div>
                </div>
              )
            }
    }

    export default Api

