import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import accauntLogo from '../../images/icon__COLOR_icon-main.svg';
import Burger from '../Burger/Burger';
import { useState } from 'react';

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();

  const headerAuthElement =
    location.pathname === '/signup' ? (
      <h1 class='header__hello'>Добро пожаловать!</h1>
    ) : (
      <h1 class='header__hello'>Рады видеть!</h1>
    );

  const headerLoggedElement = loggedIn ? (
    <>
      <div className='header__links-wrap-content'>
        <ul className='header__links-content'>
          <li className='header__link-content-wrap'>
            <Link to={'/movies'} className='header__link-film'>
              Фильмы
            </Link>
          </li>
          <li className='header__link-content-wrap'>
            <Link to={'/saved-movies'} className='header__link-save-film'>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to={'/profile'} className='header__btn-account'>
          <img className='header__img-account' src={accauntLogo} alt='иконка' />
          <p className='header__txt-account'>Аккаунт</p>
        </Link>
      </div>
      <div
        onClick={() => setBurgerOpen(!burgerOpen)}
        className='header__mobile-btn'
      ></div>
    </>
  ) : (
    <ul className='header__links'>
      <li className='header__link-wrap'>
        <Link to='/signup' className='header__link-registration'>
          Регистрация
        </Link>
      </li>
      <li className='header__link-wrap'>
        <Link to='/signin' className='header__link-login'>
          Войти
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <header
        className={`header ${location.pathname === '/' ? '' : 'header_light'} ${
          location.pathname === '/signin' || location.pathname === '/signup'
            ? 'header_log-reg'
            : ''
        }`}
      >
        <Link to='/'>
          <div className='header__logo'></div>
        </Link>

        {location.pathname === '/signin' || location.pathname === '/signup'
          ? headerAuthElement
          : headerLoggedElement}
      </header>
    </>
  );
}

export default Header;
