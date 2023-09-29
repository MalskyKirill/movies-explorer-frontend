import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='navigation'>
      <ul className='navigation__links'>
        <li className='navigation__link-wrap'>
          <HashLink smooth to='/#aboutProject' className='navigation__link'>
            О проекте
          </HashLink>
        </li>
        <li className='navigation__link-wrap'>
          <HashLink smooth to='/#techs' className='navigation__link'>
            Технологии
          </HashLink>
        </li>
        <li className='navigation__link-wrap'>
          <HashLink smooth to='/#aboutMe' className='navigation__link'>
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
