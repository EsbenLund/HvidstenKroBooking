import FpCard from "../components/fpCard"
import bord from "../assets/bord.png"
import selskab from "../assets/selskab.png"
import værelse from "../assets/værelse.png"
import Navbar from "../components/navbarForside"
import ForsideTop from "../components/forsideTop"
import ForsideBund from "../components/forsideBund"
import ProfilLink from "../components/profilLink"
import { Link } from "react-router-dom"



export default function ForsidePage() {
    const emStyle = {
        fontWeight: 'bold',
       
    }
  
    return (
        <>
         <ProfilLink />
        <div className="min-h-screen">
        <ForsideTop />
         <Navbar />
         <h1 className="text-center text-[#653535] font-bold text-lg">Book Vores Faciliteter</h1>
         <section className="text-center text-black m-2">
            <p className="snavret-tekst">Oplev vores traditionelle kro og book nemt din næste oplevelse hos os! 
            Uanset om du ønsker at reservere et bord til vores lækre <em style={emStyle}>madoplevelser</em> eller sikre dig en overnatning i vores <em style={emStyle}>hyggelige værelser</em>,
            kan du nemt gøre det online via vores <em style={emStyle}>bookingsystem </em></p> <br />

            <p className="snavret-tekst mb-10">Du har også mulighed for at ringe til os direkte på <em style={emStyle}>8647 7022</em>. 
            Vi ser frem til at byde dig velkommen til en smagfuld og komfortabel tid hos os!</p>
         </section>
         <div className="flex flex-wrap justify-center gap-4">
         <Link to="/BookRoom"><FpCard img={værelse} title="Book Et Værelse"/></Link>
         <Link to="/BookBord"><FpCard img={bord} title="Book Et Bord" /></Link>
         <Link to="/BookSelskab"><FpCard img={selskab} title="Book Et Selskab" /></Link>
        </div>
      
        
        </div>
        <div>
         <ForsideBund />
        </div>
</>
    )
}