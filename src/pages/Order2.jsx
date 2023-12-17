import React, { useState, useEffect } from 'react';
import { doc, setDoc } from "firebase/firestore";
import Accordion from '../components/Accordion2';
import Kvitering from '../components/Kvitering2';
import Background from '../components/Background';
import { CSSTransition } from 'react-transition-group';
import { db } from '../components/google/config'; 

function Order2() {
  const [showAccordion, setShowAccordion] = useState(true);
  const [showKvitering, setShowKvitering] = useState(false);
  const [isBookingSent, setIsBookingSent] = useState(false);

  const [accordionValues, setAccordionValues] = useState({
    nameValue: '',
    emailValue: '',
    phoneValue: '',
    inputDate: '',
    extraInputDate:''
  });

  useEffect(() => {
    if (isBookingSent || !accordionValues || Object.values(accordionValues).some(value => !value)) {
      return;
    }

    const sendBookingToFirestore = async () => {
      const uniqueBookingId = `bestilling_${Date.now()}`;
      const bookingDoc = doc(db, "BestillingerVærelser", uniqueBookingId);

      const bookingData = {
        ...accordionValues,
        type: "Værelse"
      };

      await setDoc(bookingDoc, bookingData);
      console.log("Booking gemt i Firestore med ID:", uniqueBookingId);
      setIsBookingSent(true);
    };

    sendBookingToFirestore();
  }, [accordionValues, isBookingSent]);

  const handleAccordionComplete = (values) => {
    setAccordionValues(values);
    setShowAccordion(false);
    setTimeout(() => setShowKvitering(true), 300); // Tidsforsinkelse for fade-effekten
  };

  const accordionItems = [
    {
      title: 'Check-in > Check-ud',
      content: '',
    },
    {
      title: 'Pris',
      content: '',
    },
    {
      title: 'Kontaktoplysninger',
      content: '',
    }
  ];

  return (
    <div>
      <Background />
      <div className="App">
      <CSSTransition
  in={showAccordion}
  timeout={300}
  classNames="fade"
  unmountOnExit
  onExited={() => setShowKvitering(true)}
>
  {() => (
    <Accordion items={accordionItems} onComplete={handleAccordionComplete} />
  )}
</CSSTransition>

<CSSTransition
  in={showKvitering}
  timeout={300}
  classNames="fade"
  unmountOnExit
>
  {() => (
    <Kvitering values={accordionValues} />
  )}
</CSSTransition>
      </div>
    </div>
  );
}

export default Order2;