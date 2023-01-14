import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMyYukuWr4nzLLenNUnpIEib6MWKJOgnw",
  authDomain: "taylor-swift-tienda.firebaseapp.com",
  projectId: "taylor-swift-tienda",
  storageBucket: "taylor-swift-tienda.appspot.com",
  messagingSenderId: "132031389461",
  appId: "1:132031389461:web:241e205f5f020d506e531c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

