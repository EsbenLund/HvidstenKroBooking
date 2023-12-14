import { auth } from '../components/google/config'
export default function ProfilePage() {
   
    const cUser = () => { 
        const user = auth().currentUser; // henter den aktuelle bruger
        if (user != null) {  // hvis der er en bruger logget ind
            return user.displayName;// returner brugerens navn
        } else {
            return "ingen bruger logget ind";// ellers returner ingen bruger logget ind
            
        }
    }

    return(
        <>
        <h1 className="text-black">Logget ind som {cUser()}</h1>
        
        </>
    )}