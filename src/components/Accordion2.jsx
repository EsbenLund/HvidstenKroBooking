import React, { useState, useEffect } from 'react';
import padlock from "../assets/padlock.png";
import padunlock from "../assets/padunlock.png";
import checkmark from "../assets/checkmark.png";

function Accordion({ items, onComplete }) {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Få datoen for den næste dag
  const getNextDay = (dateString) => {
    const today = new Date(dateString);
    today.setDate(today.getDate() + 1);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState([false, true, true, true]);


  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [inputDate, setInputDate] = useState(getCurrentDate());
  const [extraInputDate, setExtraInputDate] = useState(getNextDay(getCurrentDate()));
  const [isUnlock4Disabled, setIsUnlock4Disabled] = useState(true);

  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const handleToggle = (index) => {
    if (index < isLocked.length - 1 && !isLocked[index]) {
      setActiveIndex(index);
    }
  };
  const handleSectionComplete = (index) => {
    if (index === items.length - 1) {
      const values = {
        nameValue,
        emailValue,
        phoneValue,
        inputDate,
        extraInputDate,
        calculatedPrice  
      };
      onComplete(values);
    } else {
      handleUnlock(index);
    }
  };


  const handleUnlock = (index) => {
    if (index < isLocked.length - 1) {
      setIsLocked((prevIsLocked) => {
        const newIsLocked = [...prevIsLocked];
        newIsLocked[index + 1] = false;
        return newIsLocked;
      });
  
      setActiveIndex(index + 1);
    }
  };



  const calculatePrice = () => {
    const checkInDate = new Date(inputDate);
    const checkOutDate = new Date(extraInputDate);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays * 800; // 800 er prisen per nat
  };
  

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    checkUnlock4Conditions();
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    checkUnlock4Conditions();
  };

  const handlePhoneChange = (e) => {
    setPhoneValue(e.target.value);
    checkUnlock4Conditions();
  };

  const checkUnlock4Conditions = () => {
    setIsUnlock4Disabled(!nameValue.trim() || !emailValue.trim() || !phoneValue.trim());
  };




  const handleDateChange = (e, inputType) => {
    const selectedDate = e.target.value;

    if (inputType === 'inputDate') {
      setInputDate(selectedDate);
      // Opdater extraInputDate, hvis den er tidligere end dagen efter inputDate
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      if (!extraInputDate || new Date(extraInputDate) < nextDay) {
        setExtraInputDate(nextDay.toISOString().split('T')[0]);
      }
    } else if (inputType === 'extraInput') {
      setExtraInputDate(selectedDate);
    }

    setCalculatedPrice(calculatePrice());
  };

  useEffect(() => {
    setCalculatedPrice(calculatePrice());
  }, [inputDate, extraInputDate]);
  useEffect(() => {
    if (inputDate && !extraInputDate) {
      const nextDay = new Date(inputDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setExtraInputDate(nextDay.toISOString().split('T')[0]);
    }
    setCalculatedPrice(calculatePrice());
  }, [inputDate, extraInputDate]);
  const getMinDateForExtraInput = () => {
    if (!inputDate) {
      return ''; // Eller returner en standarddato, hvis det er mere passende
    }
    const nextDay = new Date(inputDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split('T')[0];
  };

  

  

  const handleSectionColorChange = (index) => {
    if (index === 3 && !isLocked[3]) {
      history.push('/receipt');
    }
  };

  const isSectionFilled = (index) => {
    switch (index) {
      case 0:
        return true; // Gør altid sektion 0 som fyldt
      case 1:
        return true;
      case 2:
        return !!inputTime;
      case 3:
        return !isUnlock4Disabled;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {items.map((item, index) => (
        <div key={index} className="mb-1">
          <div
            className={`text-[#060000] bg-gradient-to-t from-[#D69E10] from-5% to-[#F2C960] p-4 cursor-pointer ${isLocked[index] ? 'locked' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <h2
              id={`section-title-${index}`}
              className="text-lg font-semibold"
            >
              {item.title}
              <span className="float-right">
                {activeIndex === index ? (
                  <img src={padunlock} alt="Padunlock" />
                ) : (
                  <img
                    src={
                      isLocked[index]
                        ? padlock
                        : isSectionFilled(index)
                        ? checkmark
                        : padunlock
                    }
                    alt={
                      isLocked[index]
                        ? "Padlock"
                        : isSectionFilled(index)
                        ? "Checkmark"
                        : "Padunlock"
                    }
                  />
                )}
              </span>
            </h2>
          </div>
          {activeIndex === index && (
            <div className="bg-[#F5EAC9] p-4 flex flex-col items-center">
              {item.content}
              {index === 0 && (
                <div className="flex flex-col">
                  <label htmlFor="inputDate">Check-in: </label>
                  <input
                    type="date"
                    id="inputDate"
                    min={getCurrentDate()}
                    onChange={(e) => handleDateChange(e, 'inputDate')}
                    value={inputDate || getCurrentDate()}
                    style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />

                  <label htmlFor="extraInputDate">Check-ud: </label>
                  <input
                    type="date"
                    id="extraInputDate"
                    onChange={(e) => handleDateChange(e, 'extraInputDate')}
                    value={extraInputDate || getCurrentDate()}
                    min={getMinDateForExtraInput()}
                    style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />

                  <button
                    className="custom-button"
                    onClick={() => {
                      handleUnlock(index);
                      handleSectionColorChange(index);
                    }}
                    disabled={false} // Altid aktiv
                  >
                    {'Næste'}
                  </button>
                </div>
              )}
                            {index === 1 && !isLocked[index] && (
                <div className="flex flex-col">
                      <p>Samlet pris for opholdet: {calculatedPrice} kr.</p>
                  <button
                    className="custom-button"
                    style={{
                      background: '#F2C960',
                      color: '#060000',
                      boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)', // Boks-skygge
                    }}
                    onClick={() => { handleUnlock(index); handleSectionColorChange(index); }}

                  >
                   Næste
                  </button>
                </div>
              )}
             {index === 2 && !isLocked[index] && (
  <div className="flex flex-col" style={{ marginBottom: '50px' }}>
                  <label htmlFor="inputName">Navn: </label>
                  <input
                    type="text"
                    id="inputName"
                    value={nameValue}
                    onChange={handleNameChange}
                    style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <label htmlFor="inputEmail">Email: </label>
                  <input
                    type="email"
                    id="inputEmail"
                    value={emailValue}
                    onChange={handleEmailChange}
                    style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <label htmlFor="inputPhone">Telefonnr: </label>
                  <input
                    type="tel"
                    id="inputPhone"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <button
                    className="custom-button"
                    onClick={() => handleSectionComplete(index)}
                    disabled={isUnlock4Disabled}
                    style={{
                      background: '#F2C960',
                      color: '#060000',
                      boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)', // Boks-skygge
                      marginTop: '8px'
                    }}

                  >
                    {isUnlock4Disabled ? (
                      <span>Udfyld alle felter</span>
                    ) : (
                      <>Godkend</>
                    )}
                  </button>
                </div>
              )}


            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;