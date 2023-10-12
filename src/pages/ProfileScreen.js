import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';

function ProfileScreen({ loggedIn, handleSingOut, name, email, setEmail, setName }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile
        handleSingOut={handleSingOut}
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
      />
    </>
  );
}

export default ProfileScreen;
