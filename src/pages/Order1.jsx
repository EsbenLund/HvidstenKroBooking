import React, { useState, useEffect } from 'react';
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import Accordion from '../components/Accordion';
import Kvitering from '../components/Kvitering';
import Background from '../components/Background';
import { CSSTransition } from 'react-transition-group';
import { auth, db } from '../components/google/config'; 



function Order1() {
  const [showAccordion, setShowAccordion] = useState(true);
  const [showKvitering, setShowKvitering] = useState(false);
  const [isBookingSent, setIsBookingSent] = useState(false);

  const [accordionValues, setAccordionValues] = useState({
    inputValue: '',
    nameValue: '',
    emailValue: '',
    phoneValue: '',
    inputTime: '',
    inputDate: ''
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setAccordionValues((prevValues) => ({
        ...prevValues,
        emailValue: currentUser.email // Sætter brugerens e-mail
      }));
    }
  }, []);


  useEffect(() => {
    if (isBookingSent || !accordionValues || Object.values(accordionValues).some(value => !value)) {
      return;
    }
  
    const currentUser = auth.currentUser;
  
    const sendBookingToFirestore = async () => {
      if (currentUser) {
        const uniqueBookingId = `bestilling_${Date.now()}`;
        const bookingData = {
          ...accordionValues,
          type: "Bord"
        };
  
        const bookingDocRef = doc(db, "Bestillinger", uniqueBookingId);
        const userDocRef = doc(db, 'users', currentUser.uid);
  
        try {
          await setDoc(bookingDocRef, bookingData); // Gem i generelle bestillinger
          await updateDoc(userDocRef, { 
            bestillinger: arrayUnion(bookingData) // Opdater brugerens bestillinger
          });
          console.log("Booking gemt i Firestore med ID:", uniqueBookingId);
          setIsBookingSent(true);
        } catch (error) {
          console.error("Fejl ved oprettelse af booking:", error);
        }
      }
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
      content: <p>Her kan brugerne vælge antal personer.</p>,
    },
    {
      title: 'Vælg dato og tidspunkt',
      content: <p>Vælg en dato og et tidspunkt for din reservation.</p>,
    },
    {
      title: 'Kontaktoplysninger',
      content: <p>Indtast dine kontaktoplysninger her.</p>,
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
<Accordion items={accordionItems} onComplete={handleAccordionComplete} userData={accordionValues} />
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

export default Order1;