import { Navigate } from "react-router-dom";
export default function AdminLogin() {
    const handleSubmit = getElementById("adminBtn").addEventListener("click", (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username === "adminHvid" && password === "Hvidsten12") {
            console.log("Du er logget ind");
            Navigate('/AdminPage');
        } else {
            alert("Forkert brugernavn eller kodeord");
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
}