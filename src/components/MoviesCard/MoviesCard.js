import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movies, isSave, handleSaveMovie, handledeDeleteMovies, handleDeleteSavedMovies }) {
  const location = useLocation();

  const src = location.pathname === '/movies' ? `https://api.nomoreparties.co/${movies.image.url}` : movies.image;

  const handleClickLike = () => {
    if(!isSave) {
      handleSaveMovie(movies)
    } else {
      handleDeleteSavedMovies(movies)
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
            className={`movie__button ${isSave ? 'movie__button_saved' : ''}`}
            onClick={handleClickLike}
            type='button'
          ></button>
        ) : (
          <button
          onClick={() => handledeDeleteMovies(movies)}
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
