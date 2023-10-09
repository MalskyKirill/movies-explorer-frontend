import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

function LoginScreen({loggedIn}) {
  return(
    <>
    <Header loggedIn={loggedIn}/>
    <Login />
    </>
  )
}

export default LoginScreen;
