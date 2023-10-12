import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({ loggedIn, handleSingOut, handleUpdateProfile, isApiError }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile
        handleSingOut={handleSingOut}
        isApiRegisterError={isApiError}
        handleUpdateProfile={handleUpdateProfile}
      />
    </>
  );
}

export default ProfileScreen;
