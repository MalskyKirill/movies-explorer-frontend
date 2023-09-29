import './MoviesCard.css';

function MoviesCard({ image, duration, nameRU, trailerLink }) {
  const src = `https://api.nomoreparties.co/${image.url}`;

  return (
    <li className='movie'>
      <a className='movie__link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='movie__foto' src={src} alt={nameRU} />
      </a>
      <div className='movie__box'>
        <p className='movie__name'>{nameRU}</p>
        <button
          className='movie__button movie__button_saved'
          type='button'
        ></button>
        <p className='movie__duration'>{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
