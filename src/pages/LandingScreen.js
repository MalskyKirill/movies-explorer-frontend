import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

function LandingScreen({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Main />
      <Footer />
    </>
  );
}

export default LandingScreen;
