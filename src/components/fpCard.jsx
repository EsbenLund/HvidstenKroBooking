import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function FpCard({ img, title }) {
 
  return (
    <div className="flex flex-col w-64 mt-4 mb-4 bg-white border border-gray-200 shadow dark:bg-white-800 dark:border-gray-700">
    <img className="" src={img} alt="Billede fra Kroen"/>  
     <div className="p-3 flex flex-row justify-evenly">   
        <h5 className=" text-l font-bold text-[#653535]">{title}</h5>
        <FontAwesomeIcon className=" items-center px-2 py-2 text-sm font-medium text-center rounded-full border-2 border-[#D69E10] text-[#D69E10]" icon={faArrowRight} />   
     </div>
  </div>
  );
}

       