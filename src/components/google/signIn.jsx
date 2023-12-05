import { signInWithGoogle } from './config';


export default function SignIn(){
    return(
        <main>
           <button onClick={signInWithGoogle}>Log på med google</button>
        </main>
    );
}