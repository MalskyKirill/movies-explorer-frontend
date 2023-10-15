import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

function MoviesCardList({searchMovies, cardsCount, handleSaveMovie, savedMovies, handledeDeleteMovies}) {

  console.log(searchMovies)
  //проверка на сохраненный фильм
  const isSave = (movie) => {
    return savedMovies.some(
      (mov) => mov.movieId === movie.id,

      )
  }

  console.log(savedMovies)

  return (
    <ul className='movies'>
      {searchMovies.slice(0, cardsCount).map((card) => (
        <MoviesCard
          movies={card}
          key={card.id}
          handleSaveMovie={handleSaveMovie}
          isSave={isSave(card)}
          handledeDeleteMovies={handledeDeleteMovies}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
