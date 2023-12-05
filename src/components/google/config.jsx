import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc , getDoc, getFirestore } from "firebase/firestore";
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

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        addUser2Db({
            name: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            uid: result.user.uid,
        });
    })
    .catch((error) => {
        console.log(error);
    });
};
export async function addUser2Db(user) {
    try {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
        await setDoc(userDocRef, user);
    } else {
        console.log("Bruger med dette uid, eksistere allerede i databasen");
    }
} catch (error) {
    console.error("Fejl ved tilføjning af bruger: ", error);
}};

export { auth, provider, db, signInWithGoogle };

