import Header from '../components/Header/Header';
import Register from '../components/Register/Register';

function RegistrationScreen({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Register />
    </>
  );
}

export default RegistrationScreen;
