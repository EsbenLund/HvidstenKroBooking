import React from 'react';
import { auth } from './config'
import { useNavigate } from 'react-router-dom';
export default function LogOut() {
    const {logOut} = auth();

    const handleLogout = async () => {
        try {
            await logOut();
            useNavigate("/ForsidePage");
        } catch (error) {
            console.log(error);
        }

    };

    // lav kode som henter brugernavn for den bruger der er logget ind
    const cUser = () => {
        const user = auth().currentUser; 
        if (user != null) { 
            return user.displayName;
        } else {
            return "ingen bruger logget ind";
        }
    }


    return(
        <>
        <h1>Velkommen tilbage {cUser()}</h1>
        <button onClick={handleLogout}>Log ud</button>
        </>
    )
}