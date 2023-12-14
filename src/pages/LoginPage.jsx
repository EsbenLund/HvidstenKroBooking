import SignIn from "../components/google/signIn"
import { Navigate } from 'react-router-dom';
export default function LoginPage() {
    function go2admin() {
        Navigate('/AdminPage')
    };
    const adminBtn = {
        textAlign: 'center',
        backgroundColor: '#653535',
        color: 'white',
        width: '15%',
        marginLeft: '42.5%',
        marginTop:'2rem',
        height: '3rem',
        borderRadius: '10px',
    }

    return (
        <>
        <SignIn />
        <button  style={adminBtn} onClick={go2admin}>Admin Login</button>
        <p className="text-center text-black">Kun for medarbejdere</p>
        </>
    )
}