import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Profile.css';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isRedact, setIsRedact] = useState(true);

  return (
    <>
      <main className='content content_main'>
        <section className='profile'>
          <h1 className='profile__name'>Привет Кирилл!</h1>
          <form className='profile__form' id='profileField' name='form'>
            <label className='profile__field-wrap'>
              <div className='profile__field-content'>
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
                  value='Kirill'
                />
              </div>
              <span className='profile__field-error profile__field-error-name profile__field-error_visible'>
                ошибка имени
              </span>
            </label>
            <label className='profile__field-wrap'>
              <div className='profile__field-content'>
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
              </div>
              <span className='profile__field-error profile__field-error-email profile__field-error_visible'>
                ошибка email
              </span>
            </label>
            {!isRedact ? (
              <button
                className='profile__redact'
                type='submit'
                form='profile-field'
              >
                Редактировать
              </button>
            ) : (
              <div className='profile__save-wrap'>
                <span className='profile__field-error profile__field-error_save profile__field-error_visible'>
                  При обновлении профиля произошла ошибка.
                </span>
                <button
                  class='profile__save'
                  type='submit'
                  form='registration-field'
                >
                  Сохранить
                </button>
              </div>
            )}
          </form>
          {!isRedact ? (
            <Link to={'/'} className='profile__exit' type='button'>
              Выйти из аккаунта
            </Link>
          ) : (
            <></>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
