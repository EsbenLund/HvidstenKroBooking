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
        width: '32px',
        height: '32px',
    };
    return (
        <>
            <Link to="/ProfilePage">
                <FontAwesomeIcon className="text-[#D69E10]" style={profilStyle} icon={faUser} />
            </Link>
        </>
    )
}