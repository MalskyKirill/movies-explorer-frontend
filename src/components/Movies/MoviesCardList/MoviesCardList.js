import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import {movies} from '../../../vendor/fish-data'

function MoviesCardList() {
console.log(movies)
  return (
    <ul className='movies'>
      {movies.map(({nameRU, duration, image, id, trailerLink}) =>

        <MoviesCard image={image} duration={duration} nameRU={nameRU} trailerLink={trailerLink} key={id}/>

      )}
    </ul>
  );
}

export default MoviesCardList;
