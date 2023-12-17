import React from 'react';
import kviteringH from "../assets/kviteringH.png";

function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('da-DK', options);
  }

function Kvitering({ values }) {
    if (!values) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className="max-w-md h-96 mt-10 mx-auto text-center border border-black bg-gradient-to-b from-[#F2C960] to-transparent">
                <img src={kviteringH} alt="kviteringheader" />
                <div className="text-lg font-bold mt-5 mb-0">Tak for din booking</div>
                Du vil modtage en kvittering for din booking på email.
                <div className="p-4 border border-black mx-auto w-2/3 h-4/1 bg-gradient-to-b from-[#F2C960] to-transparent" style={{ textAlign: 'left' }}>
                    <p><strong>Antal personer:</strong> {values.inputValue}</p>
                    <p><strong>Navn:</strong> {values.nameValue}</p>
                    <p><strong>Email:</strong> {values.emailValue}</p>
                    <p><strong>Telefonnummer:</strong> {values.phoneValue}</p>
                    <p><strong>Valgt tid:</strong> {values.inputTime}</p>
                    <p><strong>Valgt dato:</strong> {formatDate(values.inputDate)}</p>
                </div>
            </div>
        </>
    );
}

export default Kvitering;
