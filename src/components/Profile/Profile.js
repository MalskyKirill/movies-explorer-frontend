import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import './Profile.css';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ handleSingOut, handleUpdateProfile, isApiError, isApiOk, setIsRedact, isRedact }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(''); // имя пользователя
  const [email, setEmail] = useState(''); // email пользователя

  const [nameError, setNameError] = useState(false); // показать ошибку имени
  const [emailError, setEmailError] = useState(false); // показать ошибку емаила

  const [inputsValid, setInputsValid] = useState(false); // проверка валидности всех инпутов

  const handleRedact = () => {
    setIsRedact(true);
  };

  const nameHandler = (evt) => {
    setName(evt.target.value);

    if (!/^[A-Za-zА-Яа-яЁё /s -]{2,}/.test(evt.target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const emailHandler = (evt) => {
    setEmail(evt.target.value);

    if (!/^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(evt.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfile(name, email);
  };

  useEffect(() => {
    if (nameError || emailError) {
      setInputsValid(false);
    } else {
      setInputsValid(true);
    }

    if (!name || !email) {
      setInputsValid(false);
    }
  }, [nameError, emailError, name, email]);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <>
      <main className='content content_main'>
        <section className='profile'>
          <h1 className='profile__name'>Привет {currentUser.name}!</h1>
          {isApiOk && (
            <span className='profile__field-error profile__field-error_save profile__field-error_visible'>
              обновление профиля прошло успешно
            </span>
          )}
          <form
            className='profile__form'
            id='profile-field'
            name='form'
            onSubmit={handleSubmit}
          >
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
                  onChange={nameHandler}
                  disabled={!isRedact}
                />
              </div>
              {nameError && (
                <span className='profile__field-error profile__field-error-name profile__field-error_visible'>
                  ошибка имени
                </span>
              )}
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
                  onChange={emailHandler}
                  disabled={!isRedact}
                />
              </div>
              {emailError && (
                <span className='profile__field-error profile__field-error-email profile__field-error_visible'>
                  ошибка email
                </span>
              )}
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
                {isApiError && (
                  <span className='profile__field-error profile__field-error_save profile__field-error_visible'>
                    При обновлении профиля произошла ошибка.
                  </span>
                )}
                <button
                  className='profile__save'
                  type='submit'
                  form='profile-field'
                  disabled={!inputsValid || isApiError}
                >
                  Сохранить
                </button>
              </div>
            )}
          </form>
          {!isRedact ? (
            <Link
              to={'/'}
              className='profile__exit'
              type='button'
              onClick={handleSingOut}
            >
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
