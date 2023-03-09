import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDnJGUKbQpWLQiaOmoKHlxFvHC4BHhWpmc",
  authDomain: "blibioteca2.firebaseapp.com",
  projectId: "blibioteca2",
  storageBucket: "blibioteca2.appspot.com",
  messagingSenderId: "978492987381",
  appId: "1:978492987381:web:a87f7b9bcd16487470b2bc",
  measurementId: "G-27C1TBG6PQ"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
