import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({loggedIn}) {
  return(
    <>
      <Header loggedIn={loggedIn}/>
      <Profile />
    </>
  )
}

export default ProfileScreen;
