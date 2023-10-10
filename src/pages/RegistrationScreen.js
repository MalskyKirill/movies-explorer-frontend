import Header from '../components/Header/Header';
import Register from '../components/Register/Register';

function RegistrationScreen({loggedIn, handleRegistration, isApiRegisterError}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Register handleRegistration={handleRegistration} isApiRegisterError={isApiRegisterError}/>
    </>
  );
}

export default RegistrationScreen;
