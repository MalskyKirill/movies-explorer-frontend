import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  searchMovies,
  cardsCount,
  handleSaveMovie,
  savedMovies,
  handledeDeleteMovies,
  handleDeleteSavedMovies,
}) {

  //проверка на сохраненный фильм
  const isSave = (movie) => {
    return savedMovies.some((mov) => mov.movieId === movie.id);
  };
  console.log(searchMovies)

  return (
    <ul className='movies'>
      {searchMovies.slice(0, cardsCount).map((card) => (
        <MoviesCard
          movies={card}
          key={card.id}
          handleSaveMovie={handleSaveMovie}
          isSave={isSave(card)}
          handledeDeleteMovies={handledeDeleteMovies}
          handleDeleteSavedMovies={handleDeleteSavedMovies}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
