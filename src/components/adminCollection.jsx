import { getFirestore, collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function AdminOverblik() {
  const [allOrders, setAllOrders] = useState([]);

  const deleteOrder = async (orderId) => {
    const firestore = getFirestore();
    const orderDocRef = doc(firestore, "Bestillinger", orderId);

    try {
      await deleteDoc(orderDocRef);
      console.log("Bestilling slettet:", orderId);
    } catch (error) {
      console.error("Fejl ved sletning af bestilling:", error);
    }
  };
  useEffect(() => {
    const firestore = getFirestore();

    const unsubscribe = onSnapshot(collection(firestore, "Bestillinger"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllOrders(data);
      console.log("Data hentet fra Firestore:", data);
    },
    (error) => {
      console.error("Fejl ved lytning efter ændringer:", error);
    });

    return () => {
      
      unsubscribe();
    };
  }, []);

  return (
    <>
    <div className="w-full flex items-center justify-center mb-24">
    <div className="flex flex-col w-2/3 gap-4">
      <h1 className="text-center ">Admin Ordre Oversigt</h1>
      <p className="text-center">Overblik over indkommende bestillinger</p>
      {allOrders.map((order) => (
        <div className="flex flex-col w-full bg-[#1E1E1E] rounded-lg text-white p-2" key={order.id}>
          <p>Type: {order.type}</p>
          <p>Navn: {order.nameValue}</p>
          <p>Email: {order.emailValue}</p>
          <p>Dato: {order.inputDate}</p>
          <p>Antal Personer: {order.inputValue}</p>
          <p>Mobil-nr: {order.phoneValue}</p>
          <button
            className="bg-white text-black rounded"
            onClick={() => deleteOrder(order.id)}
          >
            Slet Bestilling
          </button>
        </div>
      ))}
    </div>
  </div>
 </>
  
  
  );
}
