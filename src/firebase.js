import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvZ1aZ1RTP7bdgWFprNRW3Ko_ad4ee-4g",
  authDomain: "challenge-242f5.firebaseapp.com",
  projectId: "challenge-242f5",
  storageBucket: "challenge-242f5.appspot.com",
  messagingSenderId: "545580318144",
  appId: "1:545580318144:web:3f69a421038a41fd705c25",
  measurementId: "G-23ZNEHNFP6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };