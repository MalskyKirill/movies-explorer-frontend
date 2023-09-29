import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import ButtonMoreMovies from './ButtonMoreMovies/ButtonMoreMovies';



function Movies() {
  const preloader = false

  return (
    <main className='content content_main'>
      <SearchForm />
      <section className='elements' aria-label='Фильмы'>
      {preloader && <Preloader />}
        {!preloader && <MoviesCardList />}
      </section>
      <ButtonMoreMovies />
    </main>
  );
}

export default Movies;
