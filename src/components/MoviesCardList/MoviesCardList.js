import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

function MoviesCardList({searchMovies}) {

  const onCardDelete = (id) => {
    // setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <ul className='movies'>
      {searchMovies.map((card) => (
        <MoviesCard
          movies={card}
          key={card.id}
          onCardDelete={onCardDelete}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
