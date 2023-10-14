import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SavedMovies from '../components/SavedMovies/SavedMovies'
function SavedMoviesScreen({loggedIn, savedMovies}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SavedMovies savedMovies={savedMovies} />
      <Footer />
    </>
  );
}

export default SavedMoviesScreen;
