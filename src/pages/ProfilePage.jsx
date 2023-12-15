import Background from '../components/Background';
import CurrentUser from '../components/currentUser';
import LogOut from '../components/google/logOut';
import ProfileBox from '../components/profileInfo';
import Uorder from '../components/userOrder';
export default function ProfilePage() {
   

    return(
        <>
        <Background />
        <LogOut />
        <CurrentUser />
        <ProfileBox />
        <Uorder />
        </>
    )}