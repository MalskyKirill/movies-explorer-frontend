import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SavedMovies from '../components/SavedMovies/SavedMovies'
function SavedMoviesScreen({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SavedMovies />
      <Footer />
    </>
  );
}

export default SavedMoviesScreen;
