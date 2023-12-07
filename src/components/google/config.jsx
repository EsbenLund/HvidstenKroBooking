import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3q80Bjng4IXqiTHCq6pzey2MS6VmjzQQ",
  authDomain: "hvidstenkrobooking-b6bd4.firebaseapp.com",
  projectId: "hvidstenkrobooking-b6bd4",
  storageBucket: "hvidstenkrobooking-b6bd4.appspot.com",
  messagingSenderId: "129112257417",
  appId: "1:129112257417:web:f077194e5dafaabe20a758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);  // Firestore database 



export { auth, provider, db,  };

