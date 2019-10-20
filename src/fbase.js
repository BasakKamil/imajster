import Rebase from 're-base';
import firebase from 'firebase';

 // Kofiguracja FIREBASE - BAZY DANYCH 
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlKjd_saYzXu9dbhV9HtCqXr17PGr8tYs",
    authDomain: "imajster-1ecc3.firebaseapp.com",
    databaseURL: "https://imajster-1ecc3.firebaseio.com",
    projectId: "imajster-1ecc3",
    storageBucket: "imajster-1ecc3.appspot.com",
    messagingSenderId: "495780935428",
    appId: "1:495780935428:web:43670ca7bf6d8b59d24251",
    measurementId: "G-1T9VQ58EYW"
});

const fbase = Rebase.createClass(firebaseApp.database());

export default fbase;