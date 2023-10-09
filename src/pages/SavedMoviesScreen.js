import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';

function SavedMoviesScreen({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Movies />
      <Footer />
    </>
  );
}

export default SavedMoviesScreen;
