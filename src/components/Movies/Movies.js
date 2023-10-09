import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import ButtonMoreMovies from '../ButtonMoreMovies/ButtonMoreMovies';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';


function Movies() {

  const [movies, setMovies] = useState([]); // массив карточек фильмов
  const [searchMovies, setSearchMovies] = useState([]); //массив отображаемых карточек
  const [searchText, setSearchText] = useState(''); //название фильма в инпуте поиска
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(false); //проверка на пустой инпут
  const [isLoading, setIsLoading] = useState(false); // показать прелоадер
  const [showMoreButton, setShowMoreButton] = useState(false); //показать кнопку еще
  const [isSearchMovies, setIsSearchMovies] = useState(false); //проверка на пустой searchMovies

  const location = useLocation();

  const inputHandler = (evt) => {
    setSearchText(evt.target.value);
  }; // изменение инпута

  const handleSubmitMovies = (evt) => {
    evt.preventDefault();
    if (searchText.length === 0) {
      setIsSearchInputEmpty(true);
      return;
    }

    const filterMovies = getFilteredData(movies);

    if (filterMovies.length === 0) {
      setIsSearchMovies(true);
      setShowMoreButton(true);
    } else {
      setIsSearchMovies(false);
      setShowMoreButton(false);
    }

    setSearchMovies(filterMovies);

  }; //отправка формы

  //получаем массив фильмов со стороннего Api и сохраняем его в lokalStorege
  const getSourceArrayMovies = () => {
    setIsLoading(true);
    if (localStorage.getItem('moviesData')) {
      const moviesData = JSON.parse(localStorage.getItem('moviesData'));

      setMovies(moviesData);
      setIsLoading(false);
    } else {
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem('moviesData', JSON.stringify(res));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // функция поиска совпадений названий фильмов
  const getFilteredData = () => {
    if (!searchText) {
      setSearchText(true);
    }

    return movies.filter((el) => el['nameRU'].includes(searchText));
  };

  useEffect(() => {
    getSourceArrayMovies();
    setShowMoreButton(true);
  }, [])

  return (
    <main className='content content_main'>
      <SearchForm
        searchText={searchText}
        isSearchInputEmpty={isSearchInputEmpty}
        inputHandler={inputHandler}
        handleSubmitMovies={handleSubmitMovies}
      />
      <section className='elements' aria-label='Фильмы'>
        {isLoading && <Preloader />}
        {!isLoading && <MoviesCardList searchMovies={searchMovies}/>}
      </section>
      {location.pathname === '/movies' ? <ButtonMoreMovies /> : <></>}
    </main>
  );
}

export default Movies;
