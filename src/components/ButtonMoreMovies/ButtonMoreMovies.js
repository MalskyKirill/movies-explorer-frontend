import './ButtonMoreMovies.css'

function ButtonMoreMovies({handleLoadMoreCards}) {
  return (
    <section className='more' aria-label='Еще фильмов'>
      <button onClick={handleLoadMoreCards} className='more__button' type='button'>
        Ещё
      </button>
    </section>
  );
}

export default ButtonMoreMovies;
