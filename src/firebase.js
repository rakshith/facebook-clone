import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7IHvpbUmVH1HS8QAs6JctMNw5en9j04c",
  authDomain: "facebook-clone-1d418.firebaseapp.com",
  databaseURL: "https://facebook-clone-1d418.firebaseio.com",
  projectId: "facebook-clone-1d418",
  storageBucket: "facebook-clone-1d418.appspot.com",
  messagingSenderId: "302642162634",
  appId: "1:302642162634:web:12a93678c52e97e844fd33",
  measurementId: "G-K67HRRWGYP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
