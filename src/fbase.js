
import firebase from 'firebase';


const cofing = {
    apiKey: "AIzaSyBlKjd_saYzXu9dbhV9HtCqXr17PGr8tYs",
    authDomain: "imajster-1ecc3.firebaseapp.com",
    databaseURL: "https://imajster-1ecc3.firebaseio.com",
    projectId: "imajster-1ecc3",
    storageBucket: "imajster-1ecc3.appspot.com",
    messagingSenderId: "495780935428",
    appId: "1:495780935428:web:43670ca7bf6d8b59d24251",
    measurementId: "G-1T9VQ58EYW"
};

 // Kofiguracja FIREBASE - BAZY DANYCH 
const firebaseApp = firebase.initializeApp(cofing);
export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true}); 

export default firebaseApp 

