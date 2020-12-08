// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfBl1K6oJMrf0_-gSdKIS-F0RwofXPq0E",
  authDomain: "fir-cf342.firebaseapp.com",
  projectId: "fir-cf342",
  storageBucket: "fir-cf342.appspot.com",
  messagingSenderId: "562971901737",
  appId: "1:562971901737:web:4e833e1e9ce9c281cf8138",
  measurementId: "G-8841HL4TYB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
