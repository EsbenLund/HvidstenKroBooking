import React, { useState, useEffect } from 'react';

import padlock from "../assets/padlock.png";
import padunlock from "../assets/padunlock.png";
import checkmark from "../assets/checkmark.png";

// Definer isUnlock2Disabled her
const isUnlock2DisabledInitialValue = true;

function Accordion({ items, onComplete, userData }) {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState([false, true, true, true]);

  const [inputValue, setInputValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [inputDate, setInputDate] = useState(getCurrentDate());
  const [menuChoice, setMenuChoice] = useState('');
  const [isUnlock2Disabled, setIsUnlock2Disabled] = useState(isUnlock2DisabledInitialValue);
  const [isUnlock4Disabled, setIsUnlock4Disabled] = useState(true);



  const handleToggle = (index) => {
    if (index < isLocked.length - 1 && !isLocked[index]) {
      setActiveIndex(index);
    }
  };
  const handleSectionComplete = (index) => {
    if (index === items.length - 1) {
      const values = {
        inputValue,
        nameValue,
        emailValue,
        phoneValue,
        inputTime,
        inputDate,
        menuChoice
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

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]\d*$/.test(value) || value === '') {
      setInputValue(value);
      setIsUnlock2Disabled(!value.trim());
    }
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

  const generateTimeOptions = () => {
    const options = [];
    const startTime = 11 * 60 + 30;
    const endTime = 21 * 60;

    for (let i = startTime; i <= endTime; i += 15) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      options.push(<option key={i} value={time}>{time}</option>);
    }
    return options;
  };

 
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setInputDate(selectedDate);
    setSavedDate(selectedDate);
  };


  const generateMenuOptions = () => {
    const menuOptions = ["Nytårsmenu", "Fødselsdagsmenu", "Julemenu"];
    return menuOptions.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));
  };

  useEffect(() => {
    // Hvis userData (fra Order1) indeholder en e-mail, sæt den i emailValue
    if (userData && userData.emailValue) {
      setEmailValue(userData.emailValue);
    }
  }, [userData]);
  useEffect(() => {
    setSavedDate(inputDate);
  }, []);

  const handleSectionColorChange = (index) => {
    // Kommenter eller fjern denne linje for at forhindre farveskift
    // document.getElementById(`section-title-${index}`).style.color = 'green';
  
    if (index === 3 && !isLocked[3]) {
      history.push('/receipt');
    }
  };

  // Funktion til at kontrollere, om en sektion er udfyldt
  const isSectionFilled = (index) => {
    switch (index) {
      case 0:
        return !isUnlock2Disabled;
      case 1:
        // Tilføj logik her for at kontrollere, om sektion 1 er udfyldt
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
                  <label htmlFor="inputNumber">Indtast antal personer: </label>
                  <input
                    type="number"
                    id="inputNumber"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <button
                   className="custom-button"

                    onClick={() => {
                      if (!isUnlock2Disabled) {
                        handleUnlock(index);
                        handleSectionColorChange(index);
                      }
                    }}
                    disabled={isUnlock2Disabled}
                  >
                    {isUnlock2Disabled ? 'Udfyld felter' : 'Næste'}
                  </button>
                </div>
              )}

              {index === 1 && !isLocked[index] && (
                <div className="flex flex-col">
                  <label htmlFor="inputDate">Vælg dato: </label>
                  <input
                    type="date"
                    id="inputDate"
                    min={getCurrentDate()}
                    onChange={handleDateChange}
                    value={inputDate || getCurrentDate()}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <label htmlFor="inputTime">Vælg klokkeslæt: </label>
                  <select
                    id="inputTime"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  >
                    <option value="" disabled>
                      Vælg tidspunkt
                    </option>
                    {generateTimeOptions()}
                  </select>
                  <button
                    className="custom-button"
                    style={{
                      background: '#F2C960',
                      color: '#060000',
                      boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)', // Boks-skygge
                    }}
                    onClick={() => { handleUnlock(index); handleSectionColorChange(index); }}
                    disabled={!inputTime}
                  >
                    {inputTime ? 'Næste' : 'Udfyld felter'}
                  </button>
                </div>
              )}
            {index === 2 && !isLocked[index] && (
          <div className="flex flex-col">
            <label htmlFor="menuChoice">Vælg menu: </label>
            <select
              id="menuChoice"
              value={menuChoice} 
              onChange={(e) => setMenuChoice(e.target.value)} 
              style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
            >
              <option value="" disabled>Vælg en menu</option>
              {generateMenuOptions()}
            </select>
                  <button
                    className="custom-button"
                    style={{
                      background: '#F2C960',
                      color: '#060000',
                      boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)', // Boks-skygge
                    }}
                    onClick={() => { handleUnlock(index); handleSectionColorChange(index); }}
                    disabled={!inputTime}
                  >
                    {inputTime ? 'Næste' : 'Udfyld felter'}
                  </button>
                </div>
              )}
             {index === 3 && !isLocked[index] && (
  <div className="flex flex-col" style={{ marginBottom: '50px' }}>
                  <label htmlFor="inputName">Navn: </label>
                  <input
                    type="text"
                    id="inputName"
                    value={nameValue}
                    onChange={handleNameChange}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <label htmlFor="inputEmail">Email: </label>
                  <input
                    type="email"
                    id="inputEmail"
                    value={emailValue}
                    onChange={handleEmailChange}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
                  />
                  <label htmlFor="inputPhone">Telefonnr: </label>
                  <input
                    type="tel"
                    id="inputPhone"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    style={{ background: 'white', border: '1px solid #ccc', padding: '5px', marginBottom: '8px' }}
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