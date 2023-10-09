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
  const [loggedIn, setLoggedIn] = useState(false); //проверка на авторизацию


  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<LandingScreen loggedIn={loggedIn}/>} />
        <Route
          path='/movies'
          element={
            <MoviesScreen
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
