import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import ButtonMoreMovies from './ButtonMoreMovies/ButtonMoreMovies';
import { useLocation } from 'react-router-dom';



function Movies() {
  const preloader = false

  const location = useLocation()

  return (
    <main className='content content_main'>
      <SearchForm />
      <section className='elements' aria-label='Фильмы'>
      {preloader && <Preloader />}
        {!preloader && <MoviesCardList />}
      </section>
      {location.pathname === '/movies' ? <ButtonMoreMovies /> : <></>}
    </main>
  );
}

export default Movies;
