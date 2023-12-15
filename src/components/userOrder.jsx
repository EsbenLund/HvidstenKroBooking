import { db, auth } from "./google/config";
import { useState, useEffect } from "react";

export default function Uorder() {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      // Vent på, at Firebase initialiseres
      const firebaseAuth = await auth;

      // Hent den aktuelle brugers UID
      const currentUserUid = firebaseAuth.currentUser?.uid;

      // Check om der er en bruger logget ind
      if (currentUserUid) {
        // Opret en reference til Bestillinger-samlingen med en where-klausul
        const ordre = db 
          .collection("Bestillinger")
          .where("uid", "==", currentUserUid)
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
    <div>
      <h1>Dine bestillinger</h1>
      {userOrders.map((order) => (
        <div key={order.id}>
          {/* Vis de relevante oplysninger om hver bestilling her */}
          <p>{order.orderDetails}</p>
        </div>
      ))}
    </div>
  );
}
