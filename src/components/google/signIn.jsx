import { useNavigate } from 'react-router-dom';
import { auth, provider,db } from './config';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc , getDoc, } from "firebase/firestore";

export default function SignIn() {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/ForsidePage');
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

    const addUser2Db = async (user) => {
        try {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) {
                await setDoc(userDocRef, user);
            } else {
                console.log("Bruger med dette uid, eksisterer allerede i databasen");
            }
        } catch (error) {
            console.error("Fejl ved tilføjning af bruger: ", error);
        }
    };

          return (
                <main className="flex items-center justify-center w-full min-h-screen text-black p-4 md:p-0">
                  <div className="border-2 border-black shadow-md p-6 md:p-20 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <h1 className="text-center text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-4">
                      <span className="text-blue-500">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span>
                    </h1>
                    <p className="mb-4">
                      Du er snart klar til at booke online.
                    </p>
                    <p className="mb-4">
                      Log nemt på med vores integrerede Google-service
                    </p>
                    <button className="mt-4 md:mt-6 h-12 w-full md:w-80 bg-blue-500 text-white rounded-md text-centerhover:bg-blue-900 transition duration-300 ease-in-out" onClick={signInWithGoogle}>
                      Log på med Google
                    </button>
                  </div>
                </main>
              );
            };