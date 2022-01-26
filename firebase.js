// Import the functions you need from the SDKs you need
// import * as getAuth from "firebase";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCLTwdlGJEKJuH579DQL48nKYw3ZTwP8Q",
  authDomain: "final-expo-app.firebaseapp.com",
  projectId: "final-expo-app",
  storageBucket: "final-expo-app.appspot.com",
  messagingSenderId: "487602687344",
  appId: "1:487602687344:web:5be35af5d78a45e88c53b5",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;

const db = firebase.firestore();

export { firebase, db };
