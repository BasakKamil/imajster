import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Shop from './Shop';
import PageNotFound from './PageNotFound';
import Contact from './Contact';
import Services from './Services';
import Admin from './Admin';

export default class Router extends Component {

    render(){

        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/services' component={Services}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

