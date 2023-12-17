import React from 'react';
import { auth } from './config';
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
    const navigate = useNavigate(); // Bruges til at navigere til en anden side

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Logger brugeren ud
            navigate("/ForsidePage"); // Sender brugeren tilbage til forsiden
        } catch (error) {
            console.log(error);
        }
    };

    const logUdBtn = {
        position: 'absolute',
        top: '15px',
        left: '10px',
        color: 'black',
        backgroundColor: '#F2C960',
        padding: '5px',
        borderRadius: '4px',
        display: auth.currentUser ? 'block' : 'none', // Skjuler knappen, hvis der er en aktuel bruger
    };

    return (
        <div className="text-white">
            <button style={logUdBtn} onClick={handleLogout}>
                Log ud
            </button>
        </div>
    );
}
