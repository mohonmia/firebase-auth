import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);
function App() {

  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
