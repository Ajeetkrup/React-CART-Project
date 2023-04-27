import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6bPiknCFTOrufBsreNxR0Sxkn7Q1m2U",
  authDomain: "cart-6f211.firebaseapp.com",
  projectId: "cart-6f211",
  storageBucket: "cart-6f211.appspot.com",
  messagingSenderId: "752857427356",
  appId: "1:752857427356:web:92de7936ee54fdeb0a6c59",
  measurementId: "G-SBKRQDQMKD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

