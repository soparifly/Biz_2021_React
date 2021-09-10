import firebase from "firebase/app";
import "firebase/database";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "YOUR FIREBACE KEY",
  authDomain: "helloandroid-14f73.firebaseapp.com",
  databaseURL: "https://helloandroid-14f73-default-rtdb.firebaseio.com",
  projectId: "helloandroid-14f73",
  storageBucket: "helloandroid-14f73.appspot.com",
  messagingSenderId: "827656854837",
  appId: "1:827656854837:web:8f2aefa7489c336eb1c07c",
  measurementId: "G-TK5Z47JPDR",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const realDB = firebase.database();

const firestore = firebase.firestore();
export { realDB, firestore };
