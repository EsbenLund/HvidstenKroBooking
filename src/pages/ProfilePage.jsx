import BackgroundProfile from '../components/backgroundProfile';
import CurrentUser from '../components/currentUser';
import LogOut from '../components/google/logOut';
import ProfileBox from '../components/profileInfo';
import Uorder from '../components/userOrder';
export default function ProfilePage() {
   

    return(
        <>
        <BackgroundProfile />
        <LogOut />
        <CurrentUser />
        <ProfileBox />
        <Uorder />

        </>
    )}