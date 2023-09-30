import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

import { movies } from '../../../vendor/fish-data';

function MoviesCardList() {
  const [cards, setCards] = useState(movies);

  const onCardDelete = (id) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <ul className='movies'>
      {cards.map((card) => (
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
