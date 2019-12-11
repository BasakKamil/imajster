import React,{Component} from 'react';
import Header from './Header';
import HomeFooter from './HomeFooter';

class Services extends Component{

    render(){
        return(

            <div className="ServicesiMajster">
                <Header/>

                <div className="InSideService">
                    <h1>Witaj w Usługach!</h1>

                    <div> * Naprawy sprzetu Apple</div>
                    <div> * Strony www w CMS</div>


                </div>
              
                <HomeFooter/> 
            </div>
        );
    }
}
export default Services;