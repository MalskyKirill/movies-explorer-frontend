import './App.css';
import LandingScreen from '../../pages/LandingScreen';
import MoviesScreen from '../../pages/MoviesScreen';
import SavedMoviesScreen from '../../pages/SavedMoviesScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import LoginScreen from '../../pages/LoginScreen';
import RegistrationScreen from '../../pages/RegistrationScreen';
import PNFScreen from '../../pages/PNFScreen/PNFScreen';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //проверка на авторизацию
  const [currentUser, setCurrentUser] = useState({}); //стейт пользователя
  const [savedMovies, setSavedMovies] = useState([]); //стейт сохранненых фильмов

  const [isApiError, setIsApiError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  //получение данных  с сервера
  useEffect(() => {
    if (localStorage.token) {
      Promise.all([mainApi.getCurrentUser(), mainApi.getSavedMovies()])
        .then(([resUserData, {data}]) => {
          setCurrentUser(resUserData);
          setSavedMovies(data)
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  //регистрация
  const handleRegistration = (email, password, name) => {
    mainApi
      .register(email, password, name)
      .then((res) => {
        navigate('/movies', { replace: true });
        setLoggedIn(true);
        setIsApiError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsApiError(true);
      });
  };

  //авторизация
  const handleLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);

          navigate('/movies', { replace: true });
          setLoggedIn(true);
          setIsApiError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsApiError(true);
      });
  };

  const handleUpdateProfile = (name, email) => {
    mainApi
      .changeProfileData(name, email)
      .then((newCurrentUserData) => {
        setCurrentUser(newCurrentUserData);
        setIsApiError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsApiError(true);
      });
  };

  // выход из профайла
  const handleSingOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('moviesData');
    localStorage.removeItem('searchText');
    localStorage.removeItem('shorts');
    navigate('/sign-in', { replace: true });
    setLoggedIn(false);
  };

  //сохранение фильма
  const handleSaveMovie = (movie) => {
    mainApi
      .createMovie(movie)
      .then((res) => {
        const savedMovesData = [...savedMovies, { ...res}];

        setSavedMovies(savedMovesData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //удаление фильма
  const handledeDeleteMovies = (movie) => {
    console.log(savedMovies)
    console.log(movie)
    mainApi.deleteMovie(movie._id).then(() => setSavedMovies(savedMovies.filter((mov) => mov._id !== movie._id)))
  }

  const handleDeleteSavedMovies = (movie) => {
    // console.log(movie)
    // console.log(savedMovies)
    const delMovie = savedMovies.find((mov) => mov.movieId === movie.id)
    console.log(delMovie)
    handledeDeleteMovies(delMovie)
  }

  // проверка токена
  const tokenCheck = () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      if (token) {
        mainApi
          .getContent(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              navigate(location.pathname, { replace: true });
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <LandingScreen
                loggedIn={loggedIn}
                handleSingOut={handleSingOut}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={MoviesScreen}
                loggedIn={loggedIn}
                handleSaveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                handleDeleteSavedMovies={handleDeleteSavedMovies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMoviesScreen}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                handledeDeleteMovies={handledeDeleteMovies}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={ProfileScreen}
                loggedIn={loggedIn}
                handleSingOut={handleSingOut}
                handleUpdateProfile={handleUpdateProfile}
                isApiRegisterError={isApiError}
              />
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ? (
                <Navigate to='/movies' replace />
              ) : (
                <RegistrationScreen
                  loggedIn={loggedIn}
                  handleRegistration={handleRegistration}
                  isApiRegisterError={isApiError}
                />
              )
            }
          />
          <Route
            path='/signin'
            element={
              loggedIn ? (
                <Navigate to='/movies' replace />
              ) : (
                <LoginScreen
                  loggedIn={loggedIn}
                  isApiError={isApiError}
                  handleLogin={handleLogin}
                />
              )
            }
          />
          <Route path='*' element={<PNFScreen />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
