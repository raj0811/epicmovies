import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcXWnozgssaI7qBpApoPw0or67GhyTpd8",
  authDomain: "epicmovies-d9e26.firebaseapp.com",
  projectId: "epicmovies-d9e26",
  storageBucket: "epicmovies-d9e26.appspot.com",
  messagingSenderId: "145297367680",
  appId: "1:145297367680:web:54606253b8028d5123bc65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

