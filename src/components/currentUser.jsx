import { auth } from '../components/google/config';
import { useState, useEffect } from 'react';

export default function CurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => { // Lytter efter ændringer i brugerens loginstatus
            console.log('onAuthStateChanged triggered with user:', user); 
            setCurrentUser(user); // Opdaterer currentUser med den aktuelle bruger
        });
        // Rens op ved komponentens afmontering
        return () => { 
            console.log('Cleaning up...');
            unsubscribe(); 
        };
    }, []);

    console.log('Rendering with currentUser:', currentUser);

    return (
        <div className="text-black flex w-full ">
            {currentUser ? (
                <div className="text-center w-2/3 justify-center mx-auto">
                    <h1>Velkommen, {currentUser.displayName}!</h1>
                    <p>Email: {currentUser.email}</p>
                </div>
            ) : (
                <p>Ingen bruger logget ind</p>
            )}
        </div>
    );
}