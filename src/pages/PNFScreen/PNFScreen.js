import { Link } from 'react-router-dom';

import './PNFScreen.css';

function PNFScreen() {

  return (
    <>
      <main className='content content_main'>
        <section className='page-not-found'>
          <h1 className='page-not-found__title'>404</h1>
          <p className='page-not-found__subtitle'>Страница не найдена</p>
          <Link to={-1} className='page-not-found__link'>
            Назад
          </Link>
        </section>
      </main>
    </>
  );
}

export default PNFScreen;
