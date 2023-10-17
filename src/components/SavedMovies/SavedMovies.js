import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import { useCallback, useEffect, useState } from 'react';

function SavedMovies({ savedMovies, handledeDeleteMovies }) {
  const [searchMovies, setSearchMovies] = useState(savedMovies); //массив отображаемых карточек
  const [searchText, setSearchText] = useState(''); //название фильма в инпуте поиска
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(false); //проверка на пустой инпут

  const [isSearchMovies, setIsSearchMovies] = useState(false); //проверка на пустой searchMovies
  const [isShort, setIsShort] = useState(false); // проверка на короткометражку

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

  //получаем массив сохраненных фильмов
  const getSourceArrayMovies = (searchText) =>
    filterMovies(searchText, isShort, savedMovies);

  // функция фильтрации фильмов
  const filterMovies = useCallback((searchText, isShort, movies) => {
    const filter = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchText.toLowerCase())
    );

    const filterShorts = filter.filter((movie) => movie.duration <= 40);

    isShort ? setSearchMovies(filterShorts) : setSearchMovies(filter);
    filter.length === 0 ? setIsSearchMovies(true) : setIsSearchMovies(false);
  }, []);

  const handleShort = () => {
    if (isShort) {
      setIsShort(false);
      filterMovies(searchText, false, savedMovies);
    } else {
      setIsShort(true);
      filterMovies(searchText, true, savedMovies);
    }
  };

  useEffect(() => {
    setIsShort(isShort);

    filterMovies(searchText, isShort, savedMovies);
  }, [filterMovies, isShort, savedMovies, searchText]);

  return (
    <main className='content content_main'>
      <SearchForm
        searchText={searchText}
        isSearchInputEmpty={isSearchInputEmpty}
        inputHandler={inputHandler}
        handleSubmitMovies={handleSubmitMovies}
        isSearchMovies={isSearchMovies}
        handleShort={handleShort}
        isShort={isShort}
      />
      <section className='elements' aria-label='Фильмы'>
        <MoviesCardList
          searchMovies={searchMovies}
          savedMovies={savedMovies}
          handledeDeleteMovies={handledeDeleteMovies}
        />
      </section>
    </main>
  );
}

export default SavedMovies;
