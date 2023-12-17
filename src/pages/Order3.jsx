import React, { useState, useEffect } from 'react';
import { doc, setDoc } from "firebase/firestore";
import Accordion from '../components/Accordion3';
import Kvitering from '../components/Kvitering3';
import Background from '../components/Background';
import { CSSTransition } from 'react-transition-group';
import { db } from '../components/google/config'; 

function Order3() {
  const [showAccordion, setShowAccordion] = useState(true);
  const [showKvitering, setShowKvitering] = useState(false);
  const [isBookingSent, setIsBookingSent] = useState(false);

  const [accordionValues, setAccordionValues] = useState({
    inputValue: '',
    nameValue: '',
    emailValue: '',
    phoneValue: '',
    inputTime: '',
    inputDate: '',
    menuChoice: ''
  });

  useEffect(() => {
    if (isBookingSent || !accordionValues || Object.values(accordionValues).some(value => !value)) {
      return;
    }

    const sendBookingToFirestore = async () => {
      const uniqueBookingId = `bestilling_${Date.now()}`;
      const bookingDoc = doc(db, "BestillingerEvents", uniqueBookingId);

      const bookingData = {
        ...accordionValues,
        type: "Event"
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
      title: 'Vælg antal personer',
      content: '',
    },
    {
      title: 'Vælg dato og tidspunkt',
      content: '',
    },
    {

      title: 'Vælg menu',
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
          <Accordion items={accordionItems} onComplete={handleAccordionComplete} />
        </CSSTransition>

        <CSSTransition
          in={showKvitering}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Kvitering values={accordionValues} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default Order3;