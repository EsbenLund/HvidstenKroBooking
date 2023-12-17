import BackgroundAdmin from "../components/backgroundAdmin";
import SignIn from "../components/google/signIn"
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
    const Navigate = useNavigate();
    function go2admin() {
        Navigate('/AdminLoginPage')
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
        <BackgroundAdmin />
        <SignIn />
        <button  style={adminBtn} onClick={go2admin}>Admin Login</button>
        <p className="text-center text-black">Kun for medarbejdere</p>
        </>
    )
}