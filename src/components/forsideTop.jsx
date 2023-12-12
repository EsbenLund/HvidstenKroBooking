import hvidstenkroTop from '../assets/hvidstenkroTop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

export default function ForsideTop() {
    const forsideNav = {
        position:'relative',
        top:'0',
        
    }
    return(
        <nav style={forsideNav}>
        <img src={hvidstenkroTop}></img>
        </nav>
    
    )
};