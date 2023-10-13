import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

function MoviesCardList({searchMovies, cardsCount, handleSaveMovie}) {

  // const isSave = (movie) => {
  //   return searchMovies.some((mov) => mov.monvieId === movie.id)
  // }


  return (
    <ul className='movies'>
      {searchMovies.slice(0, cardsCount).map((card) => (
        <MoviesCard
          movies={card}
          key={card.id}
          handleSaveMovie={handleSaveMovie}
          // isSave={isSave(card)}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
