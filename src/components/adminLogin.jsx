import { Navigate } from "react-router-dom";
export default function AdminLogin() {
    const handleSubmit = getElementById("adminBtn").addEventListener("click", (e) => { 
        e.preventDefault(); // Prevents the page from reloading
        const username = e.target.elements.username.value; // tager værdien fra inputfeltet med name="username"
        const password = e.target.elements.password.value; // tager værdien fra inputfeltet med name="password"
        if (username === "adminHvid" && password === "Hvidsten12") { // hvis brugernavn og kodeord er korrekt
            console.log("Du er logget ind"); // skriv dette i konsollen
            Navigate('/AdminPage');    // send brugeren til admin siden
        } else {
            alert("Forkert brugernavn eller kodeord"); // ellers skriv dette i en alert boks
        }

    });
        
    return (
        <>
        <h1>Hvidsten Kro - Admin Login</h1>
        <p></p>
        <form className="flex flex-column" onSubmit={handleSubmit}>
            <label>
                <input type="text" name="username" required placeholder="Indtast Brugernavn"></input>
            </label>
            <label>
                <input type="password" required name="password" placeholder="Indtast kode"></input>
            </label>
            <button id="adminBtn" type="submit">Login</button>
        </form>
        </>
    )
};
