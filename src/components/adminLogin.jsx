import { useNavigate } from "react-router-dom";

export default function AdminLogin() { // funktionen der håndterer login til admin siden
    const Navigate = useNavigate();

    const checkPswd = () => {
        const correctUsername = "adminHvid"; // brugernavn til admin siden
        const correctPassword = "Hvidsten12"; // kodeord til admin siden

        const enteredUsername = document.getElementById("username").value; // henter brugernavnet fra input feltet
        const enteredPassword = document.getElementById("pswd").value; // henter kodeordet fra input feltet

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) { // hvis brugernavnet og kodeordet er korrekt
            console.log("Du er logget ind"); 
            Navigate('/AdminPage'); // navigerer til admin siden
        } else {
            alert("Forkert brugernavn eller kodeord"); // ellers vises en alert med beskeden om at brugernavnet eller kodeordet er forkert
        }
    };

    return (
        <>
            <h1 className="text-center">Hvidsten Kro - Admin Login</h1>
            <p className="text-center"></p>
            <div className="flex justify-center align-center">
                <form className="flex flex-col w-1/2 mt-2">
                    <label>
                        <input
                            className="bg-white text-black w-full mb-1 text-center h-8"
                            type="text"
                            id="username"
                            placeholder="Indtast Brugernavn"
                        />
                    </label>
                    <label>
                        <input
                            className="w-full bg-white text-black mb-1 text-center h-8"
                            type="password"
                            id="pswd"
                            placeholder="Indtast kode"
                        />
                    </label>
                    <input
                        className="bg-[#653535] h-10 text-white"
                        type="button"
                        value="Login"
                        onClick={checkPswd}
                    />
                </form>
            </div>
        </>
    );
}
