
import firebase from 'firebase';


// const config = {
//     apiKey: "AIzaSyBlKjd_saYzXu9dbhV9HtCqXr17PGr8tYs",
//     authDomain: "imajster-1ecc3.firebaseapp.com",
//     databaseURL: "https://imajster-1ecc3.firebaseio.com",
//     projectId: "imajster-1ecc3",
//     storageBucket: "imajster-1ecc3.appspot.com",
//     messagingSenderId: "495780935428",
//     appId: "1:495780935428:web:43670ca7bf6d8b59d24251",
//     measurementId: "G-1T9VQ58EYW"
// };

// Nowa Baza Danych 
const config = {
    apiKey: "AIzaSyBBB91LDXwwCwTP4HXR5ioyChAWdCVSy1M",
    authDomain: "imajsternowa.firebaseapp.com",
    databaseURL: "https://imajsternowa.firebaseio.com",
    projectId: "imajsternowa",
    storageBucket: "imajsternowa.appspot.com",
    messagingSenderId: "382361444680",
    appId: "1:382361444680:web:de54ad3ebab9cf6936537d",
    measurementId: "G-X00D19F9LE"
  };



 // Kofiguracja FIREBASE - BAZY DANYCH 
const firebaseApp = firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true}); 
export const firestore = firebase.firestore();

export default firebaseApp

