import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function MoviesScreen({ loggedIn, handleSaveMovie, savedMovies }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Movies handleSaveMovie={handleSaveMovie} savedMovies={savedMovies} />
      <Footer />
    </>
  );
}

export default MoviesScreen;
