import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

function LoginScreen({ loggedIn, isApiError, handleLogin }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Login isApiError={isApiError} handleLogin={handleLogin} />
    </>
  );
}

export default LoginScreen;
