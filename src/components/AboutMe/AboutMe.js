import './AboutMe.css'
import Avatar from '../../images/IMG_6884.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className='about-me' aria-label='Про мне' id='aboutMe'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__block'>
        <img src={Avatar} alt='аватар' className='about-me__img' />
        <div className='about-me__description'>
          <h3 className='about-me__name'>Кирилл</h3>
          <p className='about-me__prof'>Web-мартышка, 36лет</p>
          <p className='about-me__text'>
            Я родился и живу в Москве, закончил МГРИ-РГГРУ. У меня есть жена и
            дочь. Я люблю готовить, а ещё увлекаюсь кросфитом. На пандемии начал
            кодить. Не остановился. Прошел 3 курса в HTML-academy и решил
            отучится в Я.Практикум по специальности web-разработчик.
          </p>
          <Link to={'https://github.com/MalskyKirill'} className='about-me__link'>
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
