import React from 'react';
import { auth } from './config'
import { useNavigate } from 'react-router-dom';
export default function LogOut() {
    const navigate = useNavigate(); // bruges til at navigere til en anden side 

    const handleLogout = async () => { // funktionen der logger brugeren ud
        try { 
            await auth.signOut(); // logger brugeren ud
            navigate("/ForsidePage"); // sender brugeren tilbage til forsiden
        } catch (error) { 
            console.log(error);
        }

    };
    const logUdBtn = {
        position: 'absolute',
        top: '15px',
        left: '10px',
        backgroundColor: '#653535',
    
    }

    return(
        <div className="text-white">
        <button style={logUdBtn} onClick={handleLogout}>Log ud</button>
        </div>
    )
}