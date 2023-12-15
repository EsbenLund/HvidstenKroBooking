



import Phones from "../assets/NoPhones.png";
import Smoke from "../assets/NoSmoking.png";
import Animal from "../assets/NoAnimals.png";
import Room from "../assets/roompicture.png";
import React, { useState } from 'react';
import Line from "../assets/linehvidsten.png";

const RoomCard = ({ heading, price }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBooking = () => {
    // Handling for booking...
    // F.eks. omdirigering til bookingsiden eller udførelse af en bestemt handling
    // Eksempel:
    window.location.href = '/bookingside'; // Ændr denne linje til den ønskede bookinghåndtering
  };

  return (
    <div className="Room-card" style={{
      backgroundColor: '#653535',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      
      margin: '0 auto', 
    }}>
      <div style={{
        width: '30%',
        marginRight: '10px',
      }}>
        <img src={Room} alt="Room" style={{ width: '100%' }} />
      </div>

      <div style={{ width: '70%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'white' }}>
          <h2 className="Card-heading">{heading}</h2>
          <p> {price} kr. pr. nat</p>
        </div>

        <hr style={{ border: '1px solid white' }} />

        <p className="Card-text">Dobbeltværelse inkl. morgenmad.</p>
        <p className="Card-text">Tilgængeligt fra kl 15.</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4% 0' }}>
          <div>
            <button className="book-button" onClick={handleBooking}>
              Book
            </button>
            <p className="Card-text" onClick={openModal} style={{ cursor: 'pointer' }}>Læs mere</p>
          </div>
          <div style={{ display: 'flex', gap: '10%', alignItems: 'center', marginBottom: '10px' }}>
            <img src={Phones} alt="No Phones" style={{ width: '20%' }} />
            <img src={Smoke} alt="No Smoking" style={{ width: '20%' }} />
            <img src={Animal} alt="No Animals" style={{ width: '20%' }} />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div className="modal-info">
                <p className="modal-head-text">Prisen er gyldig til og med den 17/12 2023</p>
                <p className="modal-head-text">Tilgængeligt fra kl 15</p>
              </div>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <h2 className="modal-head-titel">{heading}</h2>
            <img src={Line} alt="Linje" style={{ width: '98%', margin: '1%' }} />
            <div className="modal-content">
              <img src={Room} alt="Room" style={{ width: '65%', marginRight: '20px' }} />
              <div className="room-info">
                <h2 className="modal-info-titel">Priser og informationer</h2>
                <p className="modal-info-text">Pris: {price} kr. pr. nat</p>
                <p className="modal-info-text">Dobbeltværelse inkl. morgenmad.</p>
                <p className="modal-info-text">Ekstra opredning: kr. 185,- pr. nat (gælder kun for børn til og med 12 år)</p>
                <p className="modal-info-text modal-text-none">Der er varmt og koldt vand på alle værelserne samt toilet og bad på gangen.</p>
                <br />
                <h2 className="modal-info-titel">Morgenmad</h2>
                <p className="modal-info-text">Der serveres morgenmad imellem kl. 8.00 og kl. 10.00</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="book-button" onClick={handleBooking}>
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
