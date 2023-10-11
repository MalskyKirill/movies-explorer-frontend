import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({loggedIn, handleSingOut}) {
  return(
    <>
      <Header loggedIn={loggedIn} />
      <Profile handleSingOut={handleSingOut}/>
    </>
  )
}

export default ProfileScreen;
