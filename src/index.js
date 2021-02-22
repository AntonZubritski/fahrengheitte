import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJ8e93qzLFFllVRWgry_VOMo-hby3nFHM",
  authDomain: "fahregheitte-41166.firebaseapp.com",
  databaseURL:
    "https://fahregheitte-41166-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fahregheitte-41166",
  storageBucket: "fahregheitte-41166.appspot.com",
  messagingSenderId: "253397941678",
  appId: "1:253397941678:web:73606946129bfead26dc3f",
  measurementId: "G-4RV7Q375PE",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
