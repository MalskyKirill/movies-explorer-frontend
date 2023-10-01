import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio' aria-label='Портфолио'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link-wrap'>
          <Link to='https://github.com/MalskyKirill/how-to-learn' className='portfolio__link'>
            Статичный сайт
          </Link>
          <button className='portfolio__link-button' type='button'></button>
        </li>
        <li className='portfolio__link-wrap'>
          <Link to='https://malskykirill.github.io/russian-travel/' className='portfolio__link'>
            Адаптивный сайт
          </Link>
          <button className='portfolio__link-button' type='button'></button>
        </li>
        <li className='portfolio__link-wrap'>
          <Link to='https://github.com/MalskyKirill/react-mesto-auth' className='portfolio__link'>
            Одностраничное приложение
          </Link>
          <button className='portfolio__link-button' type='button'></button>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
