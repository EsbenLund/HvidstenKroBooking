import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, updateDoc, doc, arrayRemove } from "firebase/firestore";
import { db, auth } from "./google/config";

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

            setUserOrders(ordreData); // Opdater state med data fra "bestillinger"-feltet
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

  const deleteOrdre = async (ordre) => {
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);

      await updateDoc(userDocRef, {
        bestillinger: arrayRemove(ordre)
      });

      setUserOrders((prevOrders) =>
        prevOrders.filter((existingOrdre) => existingOrdre.id !== ordre.id)
      );

      // Genindlæs siden efter sletning af bestilling
      location.reload();
    } catch (error) {
      console.error("Fejl ved sletning af bestilling:", error);
    }
};

  

  return (
    <div className="flex flex-col items-center justify-center w-full text-black mt-2 p-4 mb-24">
      <h1 className="text-center mt-2">Dine Bestillinger:</h1>
      {userOrders.length > 0 ? (
        userOrders.map((ordre) => (
          <div key={ordre.id} className="flex flex-col w-2/3 p-4 bg-white border-2 border-black rounded mt-2">
            <p className="mb-2">Type: {ordre.type}</p>
            <p className="mb-2">Dato: {ordre.inputDate}</p>
            <p className="mb-2">Check ud: {ordre.extraInputDate}</p>
            <p className="mb-2">Tid: {ordre.inputTime}</p>
            <p className="mb-2">Antal Personer: {ordre.inputValue}</p>
            <p className="mb-2">Menu: {ordre.menuChoice}</p>
            <button className="bg-[#F2C960] w-1/3 text-black rounded p-1" onClick={() => deleteOrdre(ordre)}>
              Slet Bestilling
            </button>
          </div>
        ))
      ) : (
        <p>Ingen bestillinger fundet.</p>
      )}
    </div>
  );
}