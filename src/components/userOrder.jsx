import { db, auth } from "./google/config";
import { useState, useEffect } from "react";

export default function uOrder() {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Hent den aktuelle brugers UID
    const currentUserUid = auth().currentUser?.uid;

    // Check om der er en bruger logget ind
    if (currentUserUid) {
      // Opret en reference til Bestillinger-samlingen med en where-klausul
      const ordre = db 
        .collection("Bestillinger") // Refererer til samlingen "Bestillinger"
        .where("uid", "==", currentUserUid) // Hent kun bestillinger, hvor uid er lig med den aktuelle brugers uid
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserOrders(data);
        });

      return () => ordre();
    }
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
