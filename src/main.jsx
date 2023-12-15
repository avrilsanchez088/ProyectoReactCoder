import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjsz0Z8O3hvtl4t4LUl2fnfSHbwvukHnI",
  authDomain: "proyecto-poder-react.firebaseapp.com",
  projectId: "proyecto-poder-react",
  storageBucket: "proyecto-poder-react.appspot.com",
  messagingSenderId: "893536462167",
  appId: "1:893536462167:web:5a80523072a4441e71ca12",
  measurementId: "G-6ZHKLNC9YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)