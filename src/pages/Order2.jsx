import React, { useState, useEffect } from 'react';
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import Accordion from '../components/Accordion2';
import Kvitering from '../components/Kvitering2';
import Background from '../components/Background';
import { CSSTransition } from 'react-transition-group';
import { auth, db } from '../components/google/config'; 

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
      const uniqueBookingId = `bestilling_${Date.now()}`;
      const bookingData = {
        ...accordionValues,
        type: "Event"
      };
    
      const bookingDocRef = doc(db, "Bestillinger", uniqueBookingId);
    
      try {
        await setDoc(bookingDocRef, bookingData); // Gem i generelle bestillinger
        console.log("Booking gemt i Firestore med ID:", uniqueBookingId);
    
        // Håndter brugerens personlige optegnelser, hvis logget ind
        if (currentUser) {
          const userDocRef = doc(db, 'users', currentUser.uid);
          await updateDoc(userDocRef, { 
            bestillinger: arrayUnion(bookingData) // Opdater brugerens bestillinger
          });
          console.log("Brugerens personlige booking optegnelser opdateret.");
        } else {
          console.log("Ingen bruger logget ind, så ingen personlig booking opdatering.");
        }
    
        setIsBookingSent(true);
      } catch (error) {
        console.error("Fejl ved oprettelse eller opdatering af booking:", error);
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
    <Accordion items={accordionItems} onComplete={handleAccordionComplete} userData={accordionValues} />
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