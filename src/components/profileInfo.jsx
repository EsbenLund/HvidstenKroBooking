
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
    <>
  <div>
    <h2 className="text-center mt-2">Personlige Oplysninger:</h2>
  </div>
  <div className="flex w-full justify-center">
    <form className="bg-[#F5EAC9] text-black mt-2 w-2/3">
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="name">Navn:</label>
        </div>
        <div className="w-1/2">
          <input
            className="text-end border rounded p-1 w-full"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="address">Adresse:</label>
        </div>
        <div className="w-1/2">
          <input
            className="text-end border rounded p-1 w-full"
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="mobile">Mobilnummer:</label>
        </div>
        <div className="w-1/2">
          <input
            className="text-end border rounded p-1 w-full"
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        className="bg-black text-white px-4 py-2 rounded justify-center w-full"
        type="button"
        onClick={saveProfile}
      >
        Gem
      </button>
    </form>
  </div>
</>

  );
};


