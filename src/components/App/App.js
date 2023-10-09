import './App.css';
import LandingScreen from '../../pages/LandingScreen';
import MoviesScreen from '../../pages/MoviesScreen';
import SavedMoviesScreen from '../../pages/SavedMoviesScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import LoginScreen from '../../pages/LoginScreen';
import RegistrationScreen from '../../pages/RegistrationScreen';
import PNFScreen from '../../pages/PNFScreen/PNFScreen';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [movies, setMovies] = useState([]); // массив карточек фильмов
  const [searchMovies, setSearchMovies] = useState([]); //массив отображаемых карточек
  const [searchText, setSearchText] = useState(''); //название фильма в инпуте поиска
  const [isSearchInputEmpty, setIsSearchInputEmpty] = useState(false); //проверка на пустой инпут
  const [isLoading, setIsLoading] = useState(false); // показать прелоадер
  const [showMoreButton, setShowMoreButton] = useState(false); //показать кнопку еще
  const [isSearchMovies, setIsSearchMovies] = useState(false); //проверка на пустой searchMovies
  const [loggedIn, setLoggedIn] = useState(false); //проверка на авторизацию

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
    <div className='page'>
      <Routes>
        <Route path='/' element={<LandingScreen loggedIn={loggedIn}/>} />
        <Route
          path='/movies'
          element={
            <MoviesScreen
              searchText={searchText}
              isSearchInputEmpty={isSearchInputEmpty}
              inputHandler={inputHandler}
              handleSubmitMovies={handleSubmitMovies}
              isLoading={isLoading}
              searchMovies={searchMovies}
              loggedIn={loggedIn}
            />
          }
        />
        <Route path='/saved-movies' element={<SavedMoviesScreen loggedIn={loggedIn}/>} />
        <Route path='/profile' element={<ProtectedRoute element={ProfileScreen} loggedIn={loggedIn}/>} />
        <Route path='/signup' element={loggedIn ? <Navigate to='/movies' replace /> : <RegistrationScreen loggedIn={loggedIn}/> } />
        <Route path='/signin' element={loggedIn ? <Navigate to='/movies' replace /> :<LoginScreen loggedIn={loggedIn}/>} />
        <Route path='*' element={<PNFScreen />} />
      </Routes>
    </div>
  );
}


export default App;
