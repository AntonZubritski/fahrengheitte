import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

//-----------------Firebase-------------------------
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

const fBase = firebase.initializeApp(firebaseConfig);
const fBaseStorage = fBase.storage();
const fBaseAuth = fBase.auth()
const fBaseData = fBase.database()

export { fBaseStorage, fBaseAuth, fBaseData } 
//-----------------Firebase END-----------------------