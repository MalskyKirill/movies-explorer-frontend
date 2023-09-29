import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <ul className="footer__links">
          <li className="footer__link-wrap">
            <a href="" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-wrap">
            <a href="" className="footer__link">Github</a>
          </li>
        </ul>
        <p className="footer__copyright">© 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
