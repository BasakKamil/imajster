import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseApp from '../fbase';
import projectReducer from "./projectReducer";


const store = createStore(projectReducer, 
    compose(  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseApp),
    reactReduxFirebase(firebaseApp)
    )
);
  
    // compose(
    //     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    //     reduxFirestore(fbase),
    //     reactReduxFirebase(fbase),

    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // // )


export default store;
