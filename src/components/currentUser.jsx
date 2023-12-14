import { auth } from '../components/google/config';
import { useState, useEffect } from 'react';

export default function CurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log('onAuthStateChanged triggered with user:', user);
            setCurrentUser(user);
        });

        // Rens op ved komponentens afmontering
        return () => {
            console.log('Cleaning up...');
            unsubscribe();
        };
    }, []);

    console.log('Rendering with currentUser:', currentUser);

    return (
        <div className="text-black flex">
            {currentUser ? (
                <div className="text-center">
                    <h1>Velkommen, {currentUser.displayName}!</h1>
                    <p>Email: {currentUser.email}</p>
                </div>
            ) : (
                <p>Ingen bruger logget ind</p>
            )}
        </div>
    );
}
