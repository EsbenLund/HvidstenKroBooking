import HvidstenTop from '../assets/forside2.png';


export default function ForsideTop() {
    const forsideNav = {
        position:'relative',
        top:'0',
    }
    return(
        <nav style={forsideNav}>
        <img src={HvidstenTop} alt="hvidsten"></img>
        </nav>
    
    )
};