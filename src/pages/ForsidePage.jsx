import FpCard from "../components/fpCard"
import bord from "../assets/bord.png"
import selskab from "../assets/selskab.png"
import værelse from "../assets/værelse.png"
import bundbanner from "../assets/bundbanner.png"
import grønbanner from "../assets/grønbanner.png"
import hvidstenkrobanner from "../assets/hvidstenkrobanner.png"
import krologo from "../assets/krologo.png"

export default function ForsidePage() {
    return (
        <>
        <main>
         <FpCard img={værelse} title="Book Et Værelse" />
         <FpCard img={bord} title="Book Et Bord" />
         <FpCard img={selskab} title="Book Et Selskab" />
         </main>
        </>

    )
}