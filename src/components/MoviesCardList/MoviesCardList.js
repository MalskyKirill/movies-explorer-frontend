import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

function MoviesCardList({searchMovies, cardsCount}) {

  const onCardDelete = (id) => {
    // setCards((cards) => cards.filter((card) => card.id !== id));
  };

  console.log(cardsCount)

  return (
    <ul className='movies'>
      {searchMovies.slice(0, cardsCount).map((card) => (
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
