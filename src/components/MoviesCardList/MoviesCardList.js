import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

function MoviesCardList({
  searchMovies,
  cardsCount,
  handleSaveMovie,
  savedMovies,
  handledeDeleteMovies,
  handleDeleteSavedMovies,
}) {
  console.log(searchMovies);
  //проверка на сохраненный фильм
  const isSave = (movie) => {
    return savedMovies.some((mov) => mov.movieId === movie.id);
  };

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
