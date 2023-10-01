import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <>
      <main className='content content_main'>
        <section className='profile'>
          <h1 className='profile__name'>Привет Кирилл!</h1>
          <form className='profile__form' id='profileField' name='form'>
            <label className='profile__field-wrap'>
              <span className='profile__label'>Имя</span>
              <input
                id='name'
                type='text'
                className='profile__field profile__field_next_name'
                placeholder='Имя'
                name='name'
                minLength='2'
                maxLength='40'
                required
              />
              <span className='profile__field-error profile__field-error-name profile__field-error_visible '>
                ошибка имени
              </span>
            </label>
            <label className='profile__field-wrap'>
              <span className='profile__label'>E-mail</span>
              <input
                id='e-mail'
                type='email'
                className='profile__field profile__field_next_email'
                placeholder='email'
                name='email'
                minLength='2'
                maxLength='200'
                required
              />
              <span className='profile__field-error profile__field-error-email'>
                ошибка email
              </span>
            </label>
            <button className='profile__save' type='submit' form='profileField'>
              Редактировать
            </button>
          </form>
            <Link to={'/'} className='profile__exit' type='button'>
              Выйти из аккаунта
            </Link>
        </section>
      </main>
    </>
  );
}

export default Profile;
