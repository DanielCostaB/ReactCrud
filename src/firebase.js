import * as firebase from "firebase";

// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyDlprNYXSXCeosZqxKi36oGhbgnKcRZHpw",

  authDomain: "react-crud-b86cf.firebaseapp.com",

  projectId: "react-crud-b86cf",

  storageBucket: "react-crud-b86cf.appspot.com",

  messagingSenderId: "4304375400",

  appId: "1:4304375400:web:05971df7c31a0e358d35dd"

};

// Initialize Firebase

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
