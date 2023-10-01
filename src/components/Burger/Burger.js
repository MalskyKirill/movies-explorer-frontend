import { Link, useLocation } from 'react-router-dom';
import './Burger.css';
import accauntLogo from '../../images/icon__COLOR_icon-main.svg';

function Burger({ burgerOpen, setBurgerOpen }) {
  const location = useLocation();

  return (
    <div className={`burger ${burgerOpen ? 'burger_active' : ''}`}>
      <div className='burger__wrap'>
        <button
          onClick={() => setBurgerOpen(!burgerOpen)}
          className='burger__close'
        ></button>
        <ul className='burger__list'>
          <li>
            <Link
              to='/'
              className={`burger__link ${
                location.pathname === '/' ? 'burger__link_active' : ''
              }`}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to='/movies'
              className={`burger__link ${
                location.pathname === '/movies' ? 'burger__link_active' : ''
              }`}
            >
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              to='/saved-movies'
              className={`burger__link ${
                location.pathname === '/saved-movies'
                  ? 'burger__link_active'
                  : ''
              }`}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link className='burger__btn-account'>
          <p className='burger__txt-account'>Аккаунт</p>
        </Link>
      </div>
    </div>
  );
}

export default Burger;
