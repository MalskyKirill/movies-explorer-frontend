import { Link } from 'react-router-dom';
import './PNFScreen.css';

function PNFScreen() {
  return (
    <>
      <main class='content content_main'>
        <section class='page-not-found'>
          <h1 class='page-not-found__title'>404</h1>
          <p class='page-not-found__subtitle'>Страница не найдена</p>
          <Link to='/' class='page-not-found__link'>
            Назад
          </Link>
        </section>
      </main>
    </>
  );
}

export default PNFScreen;
