import { db, auth } from "./google/config";
import { useState, useEffect } from "react";

export default function Uorder() {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      // Vent på, at Firebase initialiseres
      const firebaseAuth = auth(); // Fjern await her, da auth allerede er en funktion

      // Hent den aktuelle brugers UID
      const currentUserEmail = firebaseAuth.currentUser?.email;

      // Check om der er en bruger logget ind
      if (currentUserEmail) {
        // Opret en reference til Bestillinger-samlingen med en where-klausul
        const ordre = db 
          .collection("Bestillinger") // Refererer til Bestillinger-samlingen
          .where("email", "==", currentUserEmail) // Hent kun bestillinger, hvor uid er lig med den aktuelle brugers uid
          .onSnapshot((snapshot) => { 
            const data = snapshot.docs.map((doc) => ({ 
              id: doc.id,
              ...doc.data(),
            }));
            setUserOrders(data);
          });

        return () => ordre();
      }
    };

    // Kald den asynkrone funktion
    fetchUserOrders();
  }, []);

  console.log(userOrders);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Dine Bestillinger:</h1>
      {userOrders.map((order) => (
        <div key={order.id}>
          <p>{order.orderDetails}</p>
        </div>
      ))}
    </div>
  );
}
