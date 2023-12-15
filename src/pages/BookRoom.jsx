import RoomCard from '../components/RoomCard';
import Background from '../components/Background';

export default function BookRoom() {
    return (
        <section>

            <div>
                <Background />
            </div>    
            <h1 className='headline'>Book Ophold på Hvidsten Kro</h1>
            <p className="intro-text">Hvis I vil overnatte, har vi dejlige værelser i gæstefløjen. Vi gør opmærksom på, at værelserne er lukkede søndag og mandag.<br /> Værelset er til rådighed fra kl. 15.00. På afrejsedagen skal værelset forlades senest kl. 11.00.</p>

            <div>
                <RoomCard heading="Blåt værelse" price={800}/>
            </div>
            <br />
            <div>
                <RoomCard heading="Grønt værelse" price={800}/>
            </div>
            <br />
            <div>
                <RoomCard heading="Rødt værelse" price={800}/>
            </div>

            <br /><br /><br /><br /><br />

        </section>

    )
}