import { db, auth } from "./google/config";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Uorder() {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userUid = user.uid;
        async function fetchData() {
          try {
            const userDocRef = collection(db, 'users');
            const userDocSnapshot = await getDocs(query(userDocRef, where("uid", "==", userUid)));

            if (userDocSnapshot.size === 0) {
              console.error("Brugeren blev ikke fundet i databasen.");
              return;
            }

            const userData = userDocSnapshot.docs[0].data();
            const ordreData = userData.bestillinger || [];

            console.log("ordreData:", ordreData);

            setUserOrders(ordreData); // Opdater state med data fra "bestillinger"-feltet

            setUserLoggedIn(true);
          } catch (error) {
            console.error('Fejl ved hentning af brugerdata', error);
          } finally {
            setLoading(false);
          }
        }

        fetchData();
      } else {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full text-black mt-2 p-4 mb-24">
    <h1 className="text-center mt-2">Dine Bestillinger:</h1>
    {userOrders.map((ordre) => (
      <div key={ordre.id} className="flex flex-col w-2/3 p-4 bg-white border-2 border-black rounded mt-2">
        <p className="mb-2">Type: {ordre.type}</p>
        <p className="mb-2">Dato: {ordre.inputDate}</p>
        <p className="mb-2">Antal Personer: {ordre.inputValue}</p>
        <button>Annuller Bestilling</button>
      </div>
    ))}
  </div>
  
  );
}
