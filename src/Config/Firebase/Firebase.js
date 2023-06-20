import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl7SH5NnX2GJb5mG7RfsOc9tVjpIF_YvQ",
  authDomain: "attendance-system-react.firebaseapp.com",
  projectId: "attendance-system-react",
  storageBucket: "attendance-system-react.appspot.com",
  messagingSenderId: "521832753690",
  appId: "1:521832753690:web:a737a48b9f140dede7ffa3",
  measurementId: "G-H21MER7PPY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// var provider = new firebase.auth.FacebookAuthProvider();
export default firebaseApp;
