import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Shop from './Shop';
import PageNotFound from './PageNotFound';
import Contact from './Contact';
import Services from './Services';
import Cv from './CV';
import AdminPanel from './AdminPanel';
import ProductView from './ProductView';
import UserForm from './User/UserForm';
import Basket from './Button/Basket';
import {Provider} from 'react-redux';
import store from '../store/store';
import Signup from '../Components/User/UserForm';

export default class Router extends Component {

    render(){

        return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/services' component={Services}/>
                    <Route exact path='/userform' component={UserForm}/>
                    <Route exact path='/cv' component={Cv}/>
                    <Route exact path='/admin' component={AdminPanel}/>
                    <Route exact path='/ProductView' component={ProductView}/>
                    <Route exact path='/Signup' component={Signup}/>
                    <Route exact path='/Basket' component={Basket}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

