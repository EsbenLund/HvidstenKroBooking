import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function FpCard({ img, title }) {
 
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
    <img className="rounded-t-lg" src={img} alt="Billede fra Kroen"/>  
     <div className="p-5">   
        <h5 className="mb-2 text-2xl font-bold text-black ">{title}</h5>
        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <FontAwesomeIcon icon={faArrowRight} />
        </Link>
     </div>
  </div>
  );
}

       