import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

function MoviesScreen({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Movies />
      <Footer />
    </>
  );
}

export default MoviesScreen;
