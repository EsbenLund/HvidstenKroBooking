import FpCard from "../components/fpCard"
import bord from "../assets/bord.png"
import selskab from "../assets/selskab.png"
import værelse from "../assets/værelse.png"
import Navbar from "../components/navbarForside"
import ForsideTop from "../components/forsideTop"
import ForsideBund from "../components/forsideBund"


export default function ForsidePage() {
    const emStyle = {
        fontWeight: 'bold',
        
    }
    return (
        <>
        <ForsideTop />
         <Navbar />
         <h1>Book Vores Faciliteter</h1>
         <section>
            <p>Oplev vores traditionelle kro og book nemt din næste oplevelse hos os! 
            Uanset om du ønsker at reservere et bord til vores lækre <em style={emStyle}>madoplevelser</em> eller sikre dig en overnatning i vores hyggelige værelser,
            kan du nemt gøre det online via vores bookingsystem</p>

            <p>Du har også mulighed for at ringe til os direkte på <em style={emStyle}>8647 7022</em>. 
            Vi ser frem til at byde dig velkommen til en smagfuld og komfortabel tid hos os!</p>
         </section>
         <div className="flex flex-wrap justify-center gap-4">
         <FpCard img={værelse} title="Book Et Værelse" />
         <FpCard img={bord} title="Book Et Bord" />
         <FpCard img={selskab} title="Book Et Selskab" />
        </div>
      
         <ForsideBund />
        </>

    )
}