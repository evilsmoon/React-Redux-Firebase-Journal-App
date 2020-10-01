import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC2lHEAhvC9m9jrmxg3h2241uRQwhxUXUg",
    authDomain: "react-redux-journal-cfa33.firebaseapp.com",
    databaseURL: "https://react-redux-journal-cfa33.firebaseio.com",
    projectId: "react-redux-journal-cfa33",
    storageBucket: "react-redux-journal-cfa33.appspot.com",
    messagingSenderId: "1053578664723",
    appId: "1:1053578664723:web:3ffc450b139434c88b18e6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}