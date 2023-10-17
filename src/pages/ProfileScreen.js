import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({ loggedIn, handleSingOut, handleUpdateProfile, isApiError, isApiOk, isRedact, setIsRedact }) {

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile
        handleSingOut={handleSingOut}
        isApiError={isApiError}
        isApiOk={isApiOk}
        handleUpdateProfile={handleUpdateProfile}
        isRedact={isRedact}
        setIsRedact={setIsRedact}
      />
    </>
  );
}

export default ProfileScreen;
