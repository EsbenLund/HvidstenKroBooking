import FpCard from "../components/fpCard"
import bord from "../assets/bord.png"
import selskab from "../assets/selskab.png"
import værelse from "../assets/værelse.png"
import Navbar from "../components/navbarForside"
import ForsideTop from "../components/forsideTop"
import ForsideBund from "../components/forsideBund"


export default function ForsidePage() {
    return (
        <>
        <ForsideTop />
         <Navbar />
         <div className="flex flex-wrap justify-center gap-4">
         <FpCard img={værelse} title="Book Et Værelse" />
         <FpCard img={bord} title="Book Et Bord" />
         <FpCard img={selskab} title="Book Et Selskab" />
        </div>
      
         <ForsideBund />
        </>

    )
}