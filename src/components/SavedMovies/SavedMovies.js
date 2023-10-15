import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

import { useCallback, useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';

function SavedMovies({savedMovies, handledeDeleteMovies}) {

  const [movies, setMovies] = useState(savedMovies); // массив карточек фильмов
  const [searchMovies, setSearchMovies] = useState([]); //массив отображаемых карточек
  const [searchText, setSearchText] = useState(''); //название фильма в инпуте поиска
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(false); //проверка на пустой инпут
  const [isLoading, setIsLoading] = useState(false); // показать прелоадер

  const [isSearchMovies, setIsSearchMovies] = useState(false); //проверка на пустой searchMovies
  const [isShort, setIsShort] = useState(false); // проверка на короткометражку
  const [isApiError, setIsApiError] = useState(false); //проверка на ошибку при запросе

  // изменение инпута
  const inputHandler = (evt) => {
    setSearchText(evt.target.value);
  };

  //отправка формы
  const handleSubmitMovies = (evt) => {
    evt.preventDefault();
    if (searchText.length === 0) {
      setIsSearchInputEmpty(true);
      return;
    }
    setIsSearchInputEmpty(false);

    getSourceArrayMovies(searchText);
  };

  //получаем массив фильмов со стороннего Api и сохраняем его в lokalStorege
  const getSourceArrayMovies = (searchText) => {
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          setIsLoading(false);
          filterMovies(searchText, isShort, res);
        })
        .catch((err) => {
          console.log(err);
          setIsApiError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      filterMovies(searchText, isShort, movies);
    }
  };

  // функция фильтрации фильмов
  const filterMovies = useCallback((searchText, isShort, movies) => {
    localStorage.setItem('moviesData', JSON.stringify(movies));
    localStorage.setItem('searchText', JSON.stringify(searchText));
    localStorage.setItem('shorts', JSON.stringify(isShort));

    const filter = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchText.toLowerCase())
    );
    const filterShorts = filter.filter((movie) => movie.duration <= 40);

    isShort ? setSearchMovies(filterShorts) : setSearchMovies(filter);

    filter.length === 0
    ? setIsSearchMovies(true)
    : setIsSearchMovies(false);
  }, []);

  const handleShort = () => {
    if (isShort) {
      setIsShort(false)
      filterMovies(searchText, false, movies)
      localStorage.setItem('shorts', JSON.stringify(false))
    } else {
      setIsShort(true)
      filterMovies(searchText, true, movies)
      localStorage.setItem('shorts', JSON.stringify(true))
    }
  }

  useEffect(() => {
    if (
      localStorage.moviesData &&
      localStorage.searchText &&
      localStorage.shorts
    ) {
      const movies = JSON.parse(localStorage.moviesData);
      const search = JSON.parse(localStorage.searchText);
      const isShort = JSON.parse(localStorage.shorts);

      setMovies(movies);
      setIsShort(isShort);
      setSearchText(search);
      filterMovies(search, isShort, movies);
    }
  }, [filterMovies]);


  return (
    <main className='content content_main'>
      <SearchForm
        searchText={searchText}
        isSearchInputEmpty={isSearchInputEmpty}
        inputHandler={inputHandler}
        handleSubmitMovies={handleSubmitMovies}
        isSearchMovies={isSearchMovies}
        isApiError={isApiError}
        handleShort={handleShort}
      />
      <section className='elements' aria-label='Фильмы'>
        {isLoading && <Preloader />}
        {!isLoading && (
          <MoviesCardList searchMovies={savedMovies} savedMovies={savedMovies} handledeDeleteMovies={handledeDeleteMovies}/>
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
