

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventSelector = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const availableEvents = ['Fødselsdag', 'Julefrokost', 'Andre Selskaber'];

  useEffect(() => {
    const storedEvent = localStorage.getItem('selectedEvent');
    if (storedEvent) {
      setSelectedEvent(storedEvent);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    localStorage.setItem('selectedEvent', event);
    setShowMenu(false);
  };

  const handleNext = () => {
    // Gør noget når "Næste" knappen trykkes
    console.log('Næste knap blev trykket');
  };

  return (
    <div>
      <div className="container" style={{ border: '5px solid #F2C960', borderRadius: '5px', padding: '5px', width: '320px', margin: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', alignItems: 'center' }}>
          <div style={{ borderRight: '2px solid #F2C960', padding: '5px', display: 'flex', alignItems: 'center' }}>
            Vælg selskab
          </div>
          <div style={{ padding: '5px', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
              {selectedEvent ? selectedEvent : 'Vælg'} &#9662;
            </div>
            {showMenu && (
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#FFF',
                  border: '2px solid #F2C960',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {availableEvents.map((event, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectEvent(event)}
                    style={{ padding: '5px', transition: 'background-color 0.3s', borderBottom: '1px solid #F2C960' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#F2C960'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/næste-sti">
          <button onClick={handleNext} style={{ padding: '10px 20px', backgroundColor: '#F2C960', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Næste</button>
        </Link>
      </div>
    </div>
  );
};

export default EventSelector;


