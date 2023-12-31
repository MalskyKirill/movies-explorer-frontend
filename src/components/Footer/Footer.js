import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const location = useLocation()

  return (
    <footer className={location.pathname === '/saved-movies' ? 'footer footer_saved' : 'footer'}>
      <h3 className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <nav className="footer__block">
        <ul className="footer__links">
          <li className="footer__link-wrap">
            <Link to={'https://practicum.yandex.ru/'} className="footer__link">Яндекс.Практикум</Link>
          </li>
          <li className="footer__link-wrap">
            <Link to={'https://github.com/MalskyKirill'} className="footer__link">Github</Link>
          </li>
        </ul>
        <p className="footer__copyright">© 2023</p>
      </nav>
    </footer>
  );
}

export default Footer;
