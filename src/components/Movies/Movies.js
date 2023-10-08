import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import ButtonMoreMovies from '../ButtonMoreMovies/ButtonMoreMovies';
import { useLocation } from 'react-router-dom';


function Movies({searchText, isSearchInputEmpty, inputHandler, handleSubmitMovies, isLoading}) {

  const location = useLocation();

  return (
    <main className='content content_main'>
      <SearchForm
        searchText={searchText}
        isSearchInputEmpty={isSearchInputEmpty}
        inputHandler={inputHandler}
        handleSubmitMovies={handleSubmitMovies}
      />
      <section className='elements' aria-label='Фильмы'>
        {isLoading && <Preloader />}
        {!isLoading && <MoviesCardList />}
      </section>
      {location.pathname === '/movies' ? <ButtonMoreMovies /> : <></>}
    </main>
  );
}

export default Movies;
