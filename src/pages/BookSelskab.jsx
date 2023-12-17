import Background from '../components/Background';
import EventSelector from '../components/EventSelector';

export default function BookSelskab() {
    return (
        <section>

            <div>
                <Background />
            </div>    
            
            <h1 className="headline">Vælg dit selskab</h1>
            <p className='intro-text modal-text-none'>Besøg Hvidstenskro og skab uforglemmelige minder med os! Planlæg din næste begivenhed hos os, hvad enten det er en fødselsdag, jubilæum eller enhver særlig lejlighed. Vores faciliteter og services er skræddersyet til at imødekomme dine behov og sikre en mindeværdig fejring. <br /></p>
            <p className='intro-text'>Book nemt online gennem vores hjemmeside, hvor du kan udforske vores selskabsmuligheder og reservere dit arrangement. Vores booking system gør det simpelt at sikre dig den perfekte oplevelse til din begivenhed.</p>

    <div>
      
      <EventSelector />
      
    </div>

            

        </section>

    )
}

