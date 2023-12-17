import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ProfilLink() {
    const profilStyle = {
        position: 'absolute',
        top:'10px',
        right:'5px',
        color: 'white',
        zIndex: '1000',
        width: '35px',
        height: '35px',
    };
    const profilP = {
       position: 'absolute',
       top:'15px',
       right:'40px',
       color: 'white',
       zIndex: '1000',
    };
    return (
        <>
            <Link to="/ProfilePage">
                <FontAwesomeIcon style={profilStyle} icon={faUser} />
                <p style={profilP}>Min Profil</p>
            </Link>
        </>
    )
}