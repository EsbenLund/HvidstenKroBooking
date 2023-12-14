import React from 'react';
import { auth } from './config'
import { useNavigate } from 'react-router-dom';
export default function LogOut() {
    const navigate = useNavigate(); // bruges til at navigere til en anden side 

    const handleLogout = async () => { 
        try { 
            await auth().signOut(); // logger brugeren ud
            navigate("/ForsidePage"); // sender brugeren tilbage til forsiden
        } catch (error) { 
            console.log(error);
        }

    };

    const cUser = () => { 
        const user = auth().currentUser; // henter den aktuelle bruger
        if (user) { // hvis der er en bruger logget ind
            return user.displayName;// returner brugerens navn
        } else {
            return "ingen bruger logget ind";// ellers returner ingen bruger logget ind
        }
    }

    return(
        <div className="text-black">
        <h1>Logget ind som {cUser()}</h1>
        <button onClick={handleLogout}>Log ud</button>
        </div>
    )
}