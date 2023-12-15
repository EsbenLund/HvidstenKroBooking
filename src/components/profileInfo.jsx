
import React, { useState, useEffect } from 'react';

export default function ProfileBox () {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    // Hent eksisterende profiloplysninger ved indlæsning af komponenten
    const storedAddress = localStorage.getItem('address');
    const storedMobile = localStorage.getItem('mobile');
    const storedName = localStorage.getItem('name');

    if (storedAddress) setAddress(storedAddress);
    if (storedMobile) setMobile(storedMobile);
    if (storedName) setName(storedName);
  }, []);

  const saveProfile = () => {
    // Gem profiloplysningerne i Local Storage
    localStorage.setItem('address', address);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('name', name);

    console.log('Profil gemt med succes.');
  };

  return (
    <div className="flex flex-col mt-4 justify-center w-full">
      <h2>Profiloplysninger</h2>
      <form className=" bg-[#F5EAC9] flex flex-col text-white mt-8 w-1/2" >
        <div className="">
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        <label htmlFor="address">Adresse:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label htmlFor="mobile">Mobilnummer:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <button type="button" onClick={saveProfile}>
          Gem
        </button>
      </form>
    </div>
  );
};


