import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SavedMovies from '../components/SavedMovies/SavedMovies'
function SavedMoviesScreen({loggedIn, savedMovies, handledeDeleteMovies}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SavedMovies savedMovies={savedMovies} handledeDeleteMovies={handledeDeleteMovies}/>
      <Footer />
    </>
  );
}

export default SavedMoviesScreen;
