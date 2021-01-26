import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxKrAF0UdIzR6E9K4TZ_W63zs4AK2Ctzc",
  authDomain: "chat-mern-ae2c1.firebaseapp.com",
  projectId: "chat-mern-ae2c1",
  storageBucket: "chat-mern-ae2c1.appspot.com",
  messagingSenderId: "271696495575",
  appId: "1:271696495575:web:943c86cdc4066ac2fb8192",
  measurementId: "G-38JKSG1TN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
