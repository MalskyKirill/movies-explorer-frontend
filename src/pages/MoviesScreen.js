import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function MoviesScreen({ loggedIn, handleSaveMovie, savedMovies, handleDeleteSavedMovies }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Movies handleSaveMovie={handleSaveMovie} savedMovies={savedMovies} handleDeleteSavedMovies={handleDeleteSavedMovies}/>
      <Footer />
    </>
  );
}

export default MoviesScreen;
