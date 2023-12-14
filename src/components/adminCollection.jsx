import { db } from "./google/config";
import { useState, useEffect } from "react";

export default function AdminOverblik() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    // Opret en reference til Bestillinger-samlingen
    const ordre = db.collection("Bestillinger").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllOrders(data);
    });

    return () => ordre();
  }, []);

  console.log(allOrders);

  return (
    <div>
      <h1>Admin Ordre Oversigt</h1>
      {allOrders.map((order) => (
        <div key={order.id}>
            
          <p>{order.orderDetails}</p>
        </div>
      ))}
    </div>
  );
}
