import './App.css';
import LandingScreen from '../../pages/LandingScreen';
import MoviesScreen from '../../pages/MoviesScreen';
import SavedMoviesScreen from '../../pages/SavedMoviesScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import LoginScreen from '../../pages/LoginScreen';
import RegistrationScreen from '../../pages/RegistrationScreen';
import PNFScreen from '../../pages/PNFScreen/PNFScreen';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //проверка на авторизацию
  const [currentUser, setCurrentUser] = useState({}); //стейт пользователя
  const [savedMovies, setSavedMovies] = useState({}); //стейт сохранненых фильмов

  const [name, setName] = useState(''); // имя пользователя
  const [email, setEmail] = useState(''); // email пользователя

  const [isApiError, setIsApiError] = useState(false);

  const navigate = useNavigate();

  //получение данных  с сервера
  useEffect(() => {
    if (localStorage.token) {
      Promise.all([mainApi.getCurrentUser()])
        .then(([resUserData, resMoviesData]) => {
          setCurrentUser(resUserData);
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

          setName(currentUser.name)
          setEmail(currentUser.email)

          navigate('/movies', { replace: true });
          setLoggedIn(true);
        }
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
              navigate('/', { replace: true });
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
                handleSingOut={handleSingOut}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMoviesScreen}
                loggedIn={loggedIn}
                handleSingOut={handleSingOut}
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
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
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
