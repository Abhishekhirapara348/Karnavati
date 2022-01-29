// Import the functions you need from the SDKs you need
// import * as getAuth from "firebase";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

firebase.apps.length == 0
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;

const db = firebase.firestore();

export { firebase, db };
