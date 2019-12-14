import firebase from 'firebase';

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
const firebasenew = firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true}); 

export default firebasenew
