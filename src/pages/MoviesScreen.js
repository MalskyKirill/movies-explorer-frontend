import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function MoviesScreen({
  searchText,
  isSearchInputEmpty,
  inputHandler,
  handleSubmitMovies,
  isLoading,
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
      />
      <Footer />
    </>
  );
}

export default MoviesScreen;
