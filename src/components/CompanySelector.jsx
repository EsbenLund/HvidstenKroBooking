

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CompanySelector = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const availableCompanies = ['Fødselsdag', 'Julefrokost', 'Andre Selskaber'];

  useEffect(() => {
    const storedCompany = localStorage.getItem('selectedCompany');
    if (storedCompany) {
      setSelectedCompany(storedCompany);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    localStorage.setItem('selectedCompany', company);
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
              {selectedCompany ? selectedCompany : 'Vælg'} &#9662;
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
                {availableCompanies.map((company, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCompany(company)}
                    style={{ padding: '5px', transition: 'background-color 0.3s', borderBottom: '1px solid #F2C960' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#F2C960'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}
                  >
                    {company}
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

export default CompanySelector;


