import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isValid, setIsValid] = useState(false)

  const [isRedact, setIsRedact] = useState(false);

  const handleRedact = () => {
    setIsRedact(true)
  }

  const handleNameChange = (evt) => {
    setName(evt.target.value)
  }

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setIsRedact(false)
  }

  useEffect(() => {
    if(name.length >= 2 && email.length >= 2) {
      setIsValid(true)
    }
  }, [name, email])

  return (
    <>
      <main className='content content_main'>
        <section className='profile'>
          <h1 className='profile__name'>Привет Кирилл!</h1>
          <form className='profile__form' id='profile-field' name='form' onSubmit={handleSubmit}>
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
                  value={name || ''}
                  onChange={handleNameChange}
                  disabled={!isRedact}
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
                  value={email || ''}
                  onChange={handleEmailChange}
                  disabled={!isRedact}
                />
              </div>
              <span className='profile__field-error profile__field-error-email profile__field-error_visible'>
                ошибка email
              </span>
            </label>
            {!isRedact ? (
              <button
                className='profile__redact'
                type='button'
                form='profile-field'
                onClick={handleRedact}
              >
                Редактировать
              </button>
            ) : (
              <div className='profile__save-wrap'>
                <span className='profile__field-error profile__field-error_save profile__field-error_visible'>
                  При обновлении профиля произошла ошибка.
                </span>
                <button
                  className='profile__save'
                  type='submit'
                  form='profile-field'
                  disabled={!isValid}

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
