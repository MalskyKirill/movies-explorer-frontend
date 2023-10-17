import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({ loggedIn, handleSingOut, handleUpdateProfile, isApiError, isApiOk }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile
        handleSingOut={handleSingOut}
        isApiError={isApiError}
        isApiOk={isApiOk}
        handleUpdateProfile={handleUpdateProfile}
      />
    </>
  );
}

export default ProfileScreen;
