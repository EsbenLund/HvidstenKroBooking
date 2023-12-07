import React from 'react';


export default function FpCard({ img, title }) {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-md bg-white shadow-md p-4 m-4 rounded-md md:flex md:flex-row md:space-x-">
        <ul>
          <li>
            <img className="w-full" src={img} alt="Billede fra Kroen" />
          </li>
          <li>
            <p className="text-center mt-2 text-black">{title}</p>
          </li>
        </ul>
      </div>
    </main>
  );
}