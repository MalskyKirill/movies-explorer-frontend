import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function MoviesScreen({
  searchText,
  isSearchInputEmpty,
  inputHandler,
  handleSubmitMovies,
  isLoading,
  searchMovies
}) {
  return (
    <>
      <Header />
      <Movies
        searchText={searchText}
        isSearchInputEmpty={isSearchInputEmpty}
        inputHandler={inputHandler}
        handleSubmitMovies={handleSubmitMovies}
        isLoading={isLoading}
        searchMovies={searchMovies}
      />
      <Footer />
    </>
  );
}

export default MoviesScreen;
