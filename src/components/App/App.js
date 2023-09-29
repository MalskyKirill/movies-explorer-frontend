import './App.css';
import LandingScreen from '../../pages/LandingScreen';
import MoviesScreen from '../../pages/MoviesScreen';
import SavedMoviesScreen from '../../pages/SavedMoviesScreen'
import ProfileScreen from '../../pages/ProfileScreen';
import LoginScreen from '../../pages/LoginScreen';
import RegistrationScreen from '../../pages/RegistrationScreen';
import PNFScreen from '../../pages/PNFScreen/PNFScreen';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<LandingScreen />}/>
        <Route path='/movies' element={<MoviesScreen />}/>
        <Route path='/saved-movies' element={<SavedMoviesScreen />}/>
        <Route path='/profile' element={<ProfileScreen />}/>
        <Route path='/signup' element={<RegistrationScreen />}/>
        <Route path='/signin' element={<LoginScreen />}/>
        <Route path='*' element={<PNFScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
