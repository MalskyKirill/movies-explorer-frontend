import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movies, isSave, handleSaveMovie }) {
  const src = `https://api.nomoreparties.co/${movies.image.url}`;
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  const handleClickLike = () => {
    setIsLiked(!isLiked)

    if(isLiked) {

    }
  }



  return (
    <li className='movie'>
      <a
        className='movie__link'
        href={movies.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='movie__foto' src={src} alt={movies.nameRU} />
      </a>
      <div className='movie__box'>
        <h2 className='movie__name'>{movies.nameRU}</h2>
        {location.pathname === '/movies' ? (
          <button
            className={`movie__button ${isLiked ? 'movie__button_saved' : ''}`}
            onClick={() => handleSaveMovie(movies)}
            type='button'
          ></button>
        ) : (
          <button
          onClick={() => {}}
            className='movie__button movie__button_del'
            type='button'

          ></button>
        )}
        <p className='movie__duration'>{movies.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
